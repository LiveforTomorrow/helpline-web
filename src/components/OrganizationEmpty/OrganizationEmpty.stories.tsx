import React, { ReactElement } from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../theme';
import OrganizationEmpty from '.';

export default {
    title: 'OrganizationEmpty',
};

export const Default = (): ReactElement => (
    <ThemeProvider theme={theme}>
        <OrganizationEmpty />
    </ThemeProvider>
);
