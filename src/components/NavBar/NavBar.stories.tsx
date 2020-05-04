import React, { ReactElement } from 'react';
import { Button } from '@material-ui/core';
import NavBar from '.';

export default {
    title: 'NavBar',
};

export const Default = (): ReactElement => <NavBar />;
export const WithVariant = (): ReactElement => (
    <NavBar variant="widget">
        <Button variant="contained" color="primary">
            Test Button
        </Button>
    </NavBar>
);
export const WithChildren = (): ReactElement => (
    <NavBar>
        <Button>Test Button</Button>
    </NavBar>
);
