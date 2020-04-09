import React from 'react';
import { render } from '@testing-library/react';
import OrganizationList from '.';

describe('OrganizationList', () => {
    let organizations, country, subdivision, topics;

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
            {
                slug: 'kidscan',
                name: 'KidsCan',
                alwaysOpen: true,
                openingHours: [],
                humanSupportTypes: [],
                categories: [],
                timezone: 'Auckland',
            },
        ];
        country = { name: 'New Zealand' };
        subdivision = { name: 'Auckland' };
        topics = [];
    });

    it('should display country name', () => {
        const { getByText } = render(
            <OrganizationList country={country} organizations={organizations} topics={topics} />,
        );
        expect(getByText('Best helplines in New Zealand.')).toBeTruthy();
    });

    it('should display subdivision name', () => {
        const { getByText } = render(
            <OrganizationList
                country={country}
                subdivision={subdivision}
                organizations={organizations}
                topics={topics}
            />,
        );
        expect(getByText('Best helplines in Auckland, New Zealand.')).toBeTruthy();
    });

    it('should render organization items', () => {
        const { getByText } = render(
            <OrganizationList country={country} organizations={organizations} topics={topics} />,
        );
        expect(getByText('Youthline') && getByText('KidsCan')).toBeTruthy();
    });

    describe('topics', () => {
        beforeEach(() => {
            topics = ['Anxiety', 'Bullying', 'Depression'];
        });

        it('should display topics', () => {
            const { getByText } = render(
                <OrganizationList country={country} organizations={organizations} topics={topics} />,
            );
            expect(getByText('Best helplines in New Zealand for anxiety, bullying, and depression.')).toBeTruthy();
        });
    });
});
