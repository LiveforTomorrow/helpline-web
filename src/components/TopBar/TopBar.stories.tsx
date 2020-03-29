import * as React from 'react';
import { storiesOf } from '@storybook/react';
import TopBar from './index';

storiesOf('TopBar', module)
    .add('default', () => {
        return <TopBar />;
    })
    .add('with country', () => {
        return <TopBar country={{ emergencyNumber: '111' }} />;
    });
