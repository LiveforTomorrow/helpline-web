import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import WidgetOrganizationList from '.';

const organizations = [
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
        timezone: 'Pacific/Auckland',
        topics: [],
        featured: false,
    },
    {
        slug: 'kidscan',
        name: 'KidsCan',
        alwaysOpen: true,
        openingHours: [],
        humanSupportTypes: [],
        categories: [],
        timezone: 'Pacific/Auckland',
        topics: [],
        featured: false,
    },
];

describe('WidgetOrganizationList', () => {
    beforeEach(() => {
        const createElement = document.createElement.bind(document);
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        document.createElement = (tagName: string) => {
            const element = createElement(tagName);
            if (tagName === 'canvas') {
                element.getContext = (): {} => ({});
            }
            return element;
        };
    });

    it('should toggle buttons disabled state', () => {
        const { getByTestId } = render(<WidgetOrganizationList organizations={organizations} />);
        const previousButton = getByTestId('previousButton');
        const nextButton = getByTestId('nextButton');
        expect(previousButton).toBeDisabled();
        fireEvent.click(nextButton);
        expect(previousButton).not.toBeDisabled();
        expect(nextButton).toBeDisabled();
        fireEvent.click(previousButton);
        expect(previousButton).toBeDisabled();
        expect(nextButton).not.toBeDisabled();
    });
});
