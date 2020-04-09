import React, { ReactElement } from 'react';
import { ThemeProvider, Box } from '@material-ui/core';
import theme from '../../theme';
import OrganizationOpen from '.';

const organization = {
    alwaysOpen: false,
    timezone: 'Pacific/Auckland',
    openingHours: [],
};

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

Default.story = {
    name: 'default',
};
