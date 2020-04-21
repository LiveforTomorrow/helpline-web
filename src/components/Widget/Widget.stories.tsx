import React, { ReactElement } from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../theme';
import { OrganizationProvider } from '../../context/organizationContext';
import Widget from '.';

const organizationData = [
    {
        slug: 'youthline',
        name: 'Youthline',
        alwaysOpen: true,
        smsNumber: '234',
        phoneNumber: '0800 376 633',
        url: 'https://www.youthline.co.nz',
        chatUrl: 'https://www.youthline.co.nz/web-chat-counselling.html',
        timezone: 'Pacific/Auckland',
        topics: [{ name: 'Topic 1' }],
        categories: [{ name: 'Category 1' }],
        humanSupportTypes: [],
        openingHours: [
            {
                day: 'monday',
                open: '2000-01-01T00:00:00Z',
                close: '2000-01-01T23:59:00Z',
            },
        ],
    },
];

const countriesData = [
    { code: 'AU', name: 'Australia', subdivisions: [] },
    {
        code: 'NZ',
        name: 'New Zealand',
        subdivisions: [
            { name: 'Bay of Plenty', code: 'BOP' },
            { name: 'Auckland', code: 'AUK' },
        ],
    },
];

const filterData = {
    topics: [{ name: 'Topic 1' }, { name: 'Topic 2' }, { name: 'Topic 3' }],
    categories: [{ name: 'Category 1' }, { name: 'Category 2' }],
    humanSupportTypes: [],
    contactMethods: [],
    sorts: [],
};

export default {
    title: 'Widget',
};

export const Default = (): ReactElement => (
    <ThemeProvider theme={theme}>
        <OrganizationProvider allOrganizations={organizationData} countries={countriesData} filterOptions={filterData}>
            <Widget />
        </OrganizationProvider>
    </ThemeProvider>
);

export const WithDefaultCountry = (): ReactElement => (
    <ThemeProvider theme={theme}>
        <OrganizationProvider
            allOrganizations={organizationData}
            activeCountry={{ code: 'AU', name: 'Australia', subdivisions: [], emergencyNumber: '0712' }}
            countries={countriesData}
            filterOptions={filterData}
        >
            <Widget />
        </OrganizationProvider>
    </ThemeProvider>
);

Default.story = {
    name: 'default',
    parameters: { chromatic: { diffThreshold: 0.7 } },
};
