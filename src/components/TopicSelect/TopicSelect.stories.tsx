import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TopicSelect from './TopicSelect';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../theme';

storiesOf('TopicSelect', module).add('default', () => {
    return (
        <ThemeProvider theme={theme}>
            <TopicSelect
                topics={[{ name: 'Anxiety' }, { name: 'Body image' }, { name: 'Bullying' }]}
                onChange={action('onChange')}
            />
        </ThemeProvider>
    );
});
