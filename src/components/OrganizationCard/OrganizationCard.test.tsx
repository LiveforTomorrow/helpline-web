import React from 'react';
import { render } from '@testing-library/react';
import OrganizationCard from '.';

const organization = {
    name: 'Youthline',
    alwaysOpen: true,
    openingHours: [],
    humanSupportTypes: [{ name: 'Volunteers' }, { name: 'Staff' }],
    categories: [{ name: 'For youth' }, { name: 'All issues' }],
    smsNumber: '234',
    phoneNumber: '0800 376 633',
    url: 'https://youthline.co.nz',
    chatUrl: 'https://youthline.co.nz',
};

describe('OrganizationCard', () => {
    it('should contain privacy link', () => {
        const { getByText } = render(<OrganizationCard organization={organization} />);
        expect(getByText(organization.name)).toBeTruthy();
    });
});
