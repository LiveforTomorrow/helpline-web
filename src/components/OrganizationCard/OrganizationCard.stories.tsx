import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider, Box } from '@material-ui/core';
import theme from '../../theme';
import OrganizationCard from '.';

const organization = {
    slug: 'youthline',
    name: 'Youthline',
    alwaysOpen: true,
    openingHours: [],
    humanSupportTypes: [{ name: 'Volunteers' }, { name: 'Staff' }],
    categories: [{ name: 'For youth' }, { name: 'All issues' }],
    smsNumber: '234',
    phoneNumber: '0800 376 633',
    url: 'https://www.youthline.co.nz/learn-and-grow.html',
    chatUrl: 'https://youthline.co.nz',
    timezone: 'Auckland',
};

storiesOf('OrganizationCard', module)
    .add('default', () => (
        <ThemeProvider theme={theme}>
            <Box m={2}>
                <OrganizationCard organization={organization} />
            </Box>
        </ThemeProvider>
    ))
    .add('basic', () => (
        <ThemeProvider theme={theme}>
            <Box m={2}>
                <OrganizationCard
                    organization={{
                        ...organization,
                        smsNumber: undefined,
                        phoneNumber: undefined,
                        chatUrl: undefined,
                        url: undefined,
                        categories: [],
                        humanSupportTypes: [],
                        alwaysOpen: false,
                    }}
                />
            </Box>
        </ThemeProvider>
    ))
    .add('no smsNumber', () => (
        <ThemeProvider theme={theme}>
            <Box m={2}>
                <OrganizationCard organization={{ ...organization, smsNumber: undefined }} />
            </Box>
        </ThemeProvider>
    ))
    .add('no phoneNumber', () => (
        <ThemeProvider theme={theme}>
            <Box m={2}>
                <OrganizationCard organization={{ ...organization, phoneNumber: undefined }} />
            </Box>
        </ThemeProvider>
    ))
    .add('no chatUrl', () => (
        <ThemeProvider theme={theme}>
            <Box m={2}>
                <OrganizationCard organization={{ ...organization, chatUrl: undefined }} />
            </Box>
        </ThemeProvider>
    ))
    .add('no url', () => (
        <ThemeProvider theme={theme}>
            <Box m={2}>
                <OrganizationCard organization={{ ...organization, url: undefined }} />
            </Box>
        </ThemeProvider>
    ))
    .add('not alwaysOpen', () => (
        <ThemeProvider theme={theme}>
            <Box m={2}>
                <OrganizationCard
                    organization={{
                        ...organization,
                        alwaysOpen: false,
                        openingHours: [{ day: 'sunday', open: '2000-01-01T09:00:00Z', close: '2000-01-01T15:00:00Z' }],
                    }}
                />
            </Box>
        </ThemeProvider>
    ));
