import React, { ReactElement } from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../theme';
import withMockOrganizationProvider from '../../context/organizationProviderMock';

import Widget from '.';

export default {
    title: 'Widget',
};

export const Default = (): ReactElement => (
    <ThemeProvider theme={theme}>{withMockOrganizationProvider(<Widget />, { organizations: [] })}</ThemeProvider>
);

export const WithActiveCountry = (): ReactElement => (
    <ThemeProvider theme={theme}>
        {withMockOrganizationProvider(<Widget />, {
            activeCountry: { code: 'AU', name: 'Australia', subdivisions: [], emergencyNumber: '0712' },
        })}
    </ThemeProvider>
);

Default.story = {
    name: 'default',
    parameters: { chromatic: { diffThreshold: 0.7 } },
};
