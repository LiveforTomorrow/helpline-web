import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../theme';
import Footer from '.';

storiesOf('Footer', module).add('default', () => (
    <ThemeProvider theme={theme}>
        <Footer />
    </ThemeProvider>
));
