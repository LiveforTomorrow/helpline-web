import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../theme';
import Placeholder from '.';

storiesOf('Placeholder', module).add('default', () => (
    <ThemeProvider theme={theme}>
        <Placeholder />
    </ThemeProvider>
));
