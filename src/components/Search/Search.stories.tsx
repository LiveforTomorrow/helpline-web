import React from 'react';
import { storiesOf } from '@storybook/react';
import Search from '.';
import { ThemeProvider, Box } from '@material-ui/core';
import theme from '../../theme';

storiesOf('Search', module).add('default', () => {
    return (
        <ThemeProvider theme={theme}>
            <Box m={2}>
                <Search
                    countries={[
                        { name: 'Australia', code: 'AU' },
                        { name: 'New Zealand', code: 'NZ' },
                    ]}
                    topics={[{ name: 'Anxiety' }, { name: 'Bullying' }]}
                />
            </Box>
        </ThemeProvider>
    );
});
