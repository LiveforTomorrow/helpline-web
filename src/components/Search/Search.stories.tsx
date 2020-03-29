import React from 'react';
import { storiesOf } from '@storybook/react';
import Search from '.';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../theme';

storiesOf('Search', module).add('default', () => {
    return (
        <ThemeProvider theme={theme}>
            <Search
                countries={[
                    { name: 'Australia', code: 'AU' },
                    { name: 'New Zealand', code: 'NZ' },
                ]}
                topics={[{ name: 'Anxiety' }, { name: 'Bullying' }]}
            />
        </ThemeProvider>
    );
});
