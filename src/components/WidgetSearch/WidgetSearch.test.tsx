import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LocalityEnum } from '../../../types/globalTypes';
import WidgetSearch from '.';

const push = jest.fn();

jest.mock('next/router', () => ({
    useRouter: (): { asPath: string; push: jest.Mock<void, void[]> } => {
        return { asPath: '/widget/au', push };
    },
}));

describe('WidgetSearch', () => {
    const preselectedCountry = { code: 'AU', name: 'Australia', subdivisions: [], locality: LocalityEnum.LOCATION };
    const countries = [
        { code: 'AU', name: 'Australia', subdivisions: [], locality: LocalityEnum.LOCATION },
        {
            code: 'NZ',
            name: 'New Zealand',
            subdivisions: [
                { name: 'Bay of Plenty', code: 'BOP' },
                { name: 'Auckland', code: 'AUK' },
            ],
            locality: LocalityEnum.LOCATION,
        },
    ];

    it('should change search url after country select', () => {
        const { getByRole } = render(<WidgetSearch preselectedCountry={preselectedCountry} countries={countries} />);
        fireEvent.click(getByRole('textbox'));
        fireEvent.click(getByRole('listbox').children[1]);
        expect(push).toHaveBeenCalledWith('/widget/[countryCode]', '/widget/nz');
    });

    it('should change search url after subdivision select', () => {
        const { getAllByRole } = render(<WidgetSearch preselectedCountry={preselectedCountry} countries={countries} />);
        fireEvent.click(getAllByRole('textbox')[0]);
        fireEvent.click(getAllByRole('listbox')[0].children[1]);
        fireEvent.click(getAllByRole('textbox')[1]);
        fireEvent.click(getAllByRole('listbox')[0].children[1]);
        expect(push).toHaveBeenCalledWith('/widget/[countryCode]/[subdivisionCode]', '/widget/nz/bop');
    });
});
