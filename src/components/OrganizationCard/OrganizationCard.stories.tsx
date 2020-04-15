import React, { ReactElement } from 'react';
import { ThemeProvider, Box } from '@material-ui/core';
import theme from '../../theme';
import Organizationcard from '.';

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
    timezone: 'Pacific/Auckland',
};

export default {
    title: 'Organizationcard',
};

export const Default = (): ReactElement => (
    <ThemeProvider theme={theme}>
        <Box m={2}>
            <Organizationcard organization={organization} />
        </Box>
    </ThemeProvider>
);

export const Basic = (): ReactElement => (
    <ThemeProvider theme={theme}>
        <Box m={2}>
            <Organizationcard
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
);

export const NoSmsNumber = (): ReactElement => (
    <ThemeProvider theme={theme}>
        <Box m={2}>
            <Organizationcard organization={{ ...organization, smsNumber: undefined }} />
        </Box>
    </ThemeProvider>
);

export const NoPhoneNumber = (): ReactElement => (
    <ThemeProvider theme={theme}>
        <Box m={2}>
            <Organizationcard organization={{ ...organization, phoneNumber: undefined }} />
        </Box>
    </ThemeProvider>
);

export const NoChatUrl = (): ReactElement => (
    <ThemeProvider theme={theme}>
        <Box m={2}>
            <Organizationcard organization={{ ...organization, chatUrl: undefined }} />
        </Box>
    </ThemeProvider>
);

export const NoUrl = (): ReactElement => (
    <ThemeProvider theme={theme}>
        <Box m={2}>
            <Organizationcard organization={{ ...organization, url: undefined }} />
        </Box>
    </ThemeProvider>
);

export const NotAlwaysOpen = (): ReactElement => (
    <ThemeProvider theme={theme}>
        <Box m={2}>
            <Organizationcard
                organization={{
                    ...organization,
                    alwaysOpen: false,
                    openingHours: [{ day: 'sunday', open: '2000-01-01T09:00:00Z', close: '2000-01-01T15:00:00Z' }],
                }}
            />
        </Box>
    </ThemeProvider>
);
