import React, { ReactElement } from 'react';
import { ThemeProvider, Box } from '@material-ui/core';
import theme from '../../theme';
import Widget from '.';

export default {
    title: 'Widget',
};

export const Default = (): ReactElement => (
    <ThemeProvider theme={theme}>
        <Widget />
    </ThemeProvider>
);

Default.story = {
    name: 'default',
    parameters: { chromatic: { diffThreshold: 0.7 } },
};
