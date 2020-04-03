import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../theme';
import OrganizationCard from '.';

const organization = { name: 'Youthline', alwaysOpen: true, openingHours: [] };

storiesOf('OrganizationCard', module).add('default', () => (
    <ThemeProvider theme={theme}>
        <OrganizationCard organization={organization} />
    </ThemeProvider>
));
