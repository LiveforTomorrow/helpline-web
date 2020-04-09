import React from 'react';
import { render } from '@testing-library/react';
import OrganizationList from '.';

describe('OrganizationList', () => {
    let organizations;

    beforeEach(() => {
        organizations = [
            {
                slug: 'youthline',
                name: 'Youthline',
                alwaysOpen: true,
                openingHours: [],
                humanSupportTypes: [{ name: 'Volunteers' }, { name: 'Staff' }],
                categories: [{ name: 'For youth' }, { name: 'All issues' }],
                smsNumber: '234',
                phoneNumber: '0800 376 633',
                url: 'https://youthline.co.nz/website',
                chatUrl: 'https://youthline.co.nz/chat',
                timezone: 'Auckland',
            },
        ];
    });

    it('should contain alwaysOpen', () => {
        const { getByText } = render(<OrganizationList organizations={organizations} />);
    });
});
