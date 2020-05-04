import React, { ReactElement } from 'react';
import { ThemeProvider, Box } from '@material-ui/core';
import theme from '../../theme';
import Chips from '.';

export default {
    title: 'Chips',
};

export const Default = (): ReactElement => (
    <ThemeProvider theme={theme}>
        <Box m={2}>
            <Chips items={[{ name: 'Anxiety' }, { name: 'Body image' }, { name: 'Bullying' }]} />
        </Box>
    </ThemeProvider>
);

export const WhenMax = (): ReactElement => (
    <ThemeProvider theme={theme}>
        <Box m={2}>
            <Chips items={[{ name: 'Anxiety' }, { name: 'Body image' }, { name: 'Bullying' }]} max={2} />
        </Box>
    </ThemeProvider>
);
