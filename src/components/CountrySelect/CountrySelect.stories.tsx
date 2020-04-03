import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Box } from '@material-ui/core';
import CountrySelect from '.';

storiesOf('CountrySelect', module).add('default', () => {
    return (
        <Box m={2}>
            <CountrySelect
                countries={[
                    { code: 'AU', name: 'Australia' },
                    { code: 'NZ', name: 'New Zealand' },
                ]}
                onChange={action('onChange')}
            />
        </Box>
    );
});
