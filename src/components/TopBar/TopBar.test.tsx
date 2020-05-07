import React from 'react';
import { render } from '@testing-library/react';
import TopBar from '.';

describe('TopBar', () => {
    it('should contain correct text', () => {
        const { getByText } = render(<TopBar />);
        expect(getByText('Need to leave quickly? Click to leave this site and open the weather.')).toBeTruthy();
    });

    it('should contain weather link', () => {
        const { getByTestId } = render(<TopBar />);
        const element = getByTestId('leaveQuicklyButton');
        expect(element.parentElement).toHaveAttribute('href', 'https://accuweather.com');
    });

    describe('country', () => {
        const country = { emergencyNumber: '111' };

        it('should contain correct text', () => {
            const { getByText } = render(<TopBar country={country} />);
            expect(getByText('Are you or someone else in immediate danger?')).toBeTruthy();
        });

        it('should contain emergency link', () => {
            const { getByTestId } = render(<TopBar country={country} />);
            const element = getByTestId('emergencyServicesButton');
            expect(element.parentElement).toHaveAttribute('href', 'tel:111');
        });

        it('should contain weather link', () => {
            const { getByTestId } = render(<TopBar country={country} />);
            const element = getByTestId('leaveQuicklyButton');
            expect(element.parentElement).toHaveAttribute('href', 'https://accuweather.com');
        });
    });
});
