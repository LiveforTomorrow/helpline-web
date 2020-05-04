import React, { ReactElement } from 'react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider, Box } from '@material-ui/core';
import theme from '../../theme';
import ItemSelect from '.';

export default {
    title: 'ItemSelect',
};

export const Default = (): ReactElement => (
    <ThemeProvider theme={theme}>
        <Box m={2}>
            <ItemSelect
                items={[{ name: 'Anxiety' }, { name: 'Body image' }, { name: 'Bullying' }]}
                onChange={action('onChange')}
            />
        </Box>
    </ThemeProvider>
);

export const WithSingle = (): ReactElement => (
    <ThemeProvider theme={theme}>
        <Box m={2}>
            <ItemSelect
                items={[{ name: 'A - Z' }, { name: 'Top Rated' }, { name: 'Open Now' }]}
                onChange={action('onChange')}
                single
            />
        </Box>
    </ThemeProvider>
);

export const WithMax = (): ReactElement => (
    <ThemeProvider theme={theme}>
        <Box m={2}>
            <ItemSelect
                items={[{ name: 'Anxiety' }, { name: 'Body image' }, { name: 'Bullying' }]}
                preselectedItems={[{ name: 'Bullying' }]}
                onChange={action('onChange')}
                max={2}
            />
        </Box>
    </ThemeProvider>
);

export const WithPreselectedItemsAndMax = (): ReactElement => (
    <ThemeProvider theme={theme}>
        <Box m={2}>
            <ItemSelect
                items={[{ name: 'Abuse' }, { name: 'Anxiety' }, { name: 'Body image' }, { name: 'Bullying' }]}
                preselectedItems={[{ name: 'Anxiety' }, { name: 'Body image' }, { name: 'Bullying' }]}
                onChange={action('onChange')}
                max={2}
            />
        </Box>
    </ThemeProvider>
);
