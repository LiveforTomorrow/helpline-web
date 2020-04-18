import React, { ReactElement } from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../theme';
import OrganizationList from '.';

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
        timezone: 'Auckland',
        topics: [],
    },
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
        topics: [],
    },
];

export default {
    title: 'OrganizationList',
};

export const Default = (): ReactElement => (
    <ThemeProvider theme={theme}>
        <OrganizationList country={{ name: 'New Zealand' }} topics={[]} organizations={organizations} />
    </ThemeProvider>
);

export const WithSubdivision = (): ReactElement => (
    <ThemeProvider theme={theme}>
        <OrganizationList
            country={{ name: 'New Zealand' }}
            subdivision={{ name: 'Auckland' }}
            topics={[]}
            organizations={organizations}
        />
    </ThemeProvider>
);

export const WithTopics = (): ReactElement => (
    <ThemeProvider theme={theme}>
        <OrganizationList
            country={{ name: 'New Zealand' }}
            subdivision={{ name: 'Auckland' }}
            topics={['Anxiety', 'Stress']}
            organizations={organizations}
        />
    </ThemeProvider>
);
