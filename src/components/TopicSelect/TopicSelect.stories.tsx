import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TopicSelect from './TopicSelect';

storiesOf('TopicSelect', module).add('default', () => {
    return (
        <TopicSelect
            topics={[{ name: 'Anxiety' }, { name: 'Body image' }, { name: 'Bullying' }]}
            onChange={action('onChange')}
        />
    );
});
