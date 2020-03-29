import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CountrySelect from './CountrySelect';

storiesOf('CountrySelect', module).add('default', () => {
    return (
        <CountrySelect
            countries={[
                { code: 'AU', name: 'Australia' },
                { code: 'NZ', name: 'New Zealand' },
            ]}
            onChange={action('onChange')}
        />
    );
});
