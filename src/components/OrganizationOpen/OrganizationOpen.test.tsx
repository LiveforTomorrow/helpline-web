import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import moment from 'moment-timezone';
import isOpen from '../../util/isOpen';
import OrganizationOpen from '.';

jest.mock('../../util/isOpen');

describe('OrganizationOpen', () => {
    let organization;

    beforeEach(() => {
        organization = {
            openingHours: [],
            timezone: 'Pacific/Auckland',
            alwaysOpen: true,
        };
    });

    it('should contain alwaysOpen', () => {
        const { getByText } = render(<OrganizationOpen organization={organization} />);
        expect(getByText('24/7')).toBeTruthy();
    });

    describe('currently closed', () => {
        beforeEach(() => {
            organization = {
                openingHours: [{ open: '2000-01-01T00:00:00Z', close: '2000-01-01T23:59:00Z', day: 'wednesday' }],
                timezone: 'Pacific/Auckland',
                alwaysOpen: false,
            };
            mocked(isOpen).mockReturnValue({ open: false });
        });

        it('should contain Closed', () => {
            const { getByText } = render(<OrganizationOpen organization={organization} />);
            expect(isOpen).toHaveBeenCalledWith(organization);
            expect(getByText('Closed')).toBeTruthy();
        });

        it('should allow expand', () => {
            const { getByText, getByTestId } = render(
                <OrganizationOpen organization={organization} expandable={true} />,
            );
            fireEvent.click(getByTestId('expandable'));
            expect(getByText('wednesday')).toBeTruthy();
        });
    });

    describe('currently open', () => {
        beforeEach(() => {
            organization = {
                openingHours: [{ open: '2000-01-01T00:00:00Z', close: '2000-01-01T23:59:00Z', day: 'wednesday' }],
                timezone: 'Pacific/Auckland',
                alwaysOpen: false,
            };
            mocked(isOpen).mockReturnValue({
                open: true,
                day: 'wednesday',
                openTime: moment('00:00', 'h:mm a'),
                closeTime: moment('23:59', 'h:mm a'),
            });
        });

        it('should contain Open', () => {
            const { getByText } = render(<OrganizationOpen organization={organization} />);
            expect(isOpen).toHaveBeenCalledWith(organization);
            expect(getByText('12:00 AM–11:59 PM')).toBeTruthy();
        });

        it('should allow expand', () => {
            const { getByText, getByTestId } = render(
                <OrganizationOpen organization={organization} expandable={true} />,
            );
            fireEvent.click(getByTestId('expandable'));
            expect(getByText('wednesday')).toBeTruthy();
        });
    });
});
