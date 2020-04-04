import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider, Box } from '@material-ui/core';
import theme from '../../theme';
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

storiesOf('OrganizationCard', module).add('default', () => (
    <ThemeProvider theme={theme}>
        <Box m={2}>
            <OrganizationCard organization={organization} />
        </Box>
    </ThemeProvider>
));
