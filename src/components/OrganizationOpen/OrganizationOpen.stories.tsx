import React, { ReactElement } from 'react';
import { ThemeProvider, Box } from '@material-ui/core';
import theme from '../../theme';
import OrganizationOpen from '.';

const organization = {
    alwaysOpen: true,
    timezone: 'Pacific/Auckland',
    openingHours: [],
};

const completeOpeningHours = [
    { day: 'monday', open: '00:00', close: '23:59' },
    { day: 'tuesday', open: '00:00', close: '23:59' },
    { day: 'wednesday', open: '00:00', close: '23:59' },
    { day: 'thursday', open: '00:00', close: '23:59' },
    { day: 'friday', open: '00:00', close: '23:59' },
    { day: 'saturday', open: '00:00', close: '23:59' },
    { day: 'sunday', open: '00:00', close: '23:59' },
];

export default {
    title: 'OrganizationOpen',
};

export const Default = (): ReactElement => (
    <ThemeProvider theme={theme}>
        <Box m={2}>
            <OrganizationOpen organization={organization} />
        </Box>
    </ThemeProvider>
);

export const Closed = (): ReactElement => (
    <ThemeProvider theme={theme}>
        <Box m={2}>
            <OrganizationOpen organization={{ ...organization, alwaysOpen: false }} />
        </Box>
    </ThemeProvider>
);

export const Opened = (): ReactElement => (
    <ThemeProvider theme={theme}>
        <Box m={2}>
            <OrganizationOpen
                organization={{ ...organization, alwaysOpen: false, openingHours: completeOpeningHours }}
            />
        </Box>
    </ThemeProvider>
);
