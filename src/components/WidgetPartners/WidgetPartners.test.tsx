import React from 'react';
import { render } from '@testing-library/react';
import { widgetPropsMock } from '../Widget/Widget.stories';
import WidgetPartners from '.';

describe('WidgetPartners', () => {
    it('should contain widget', () => {
        const { getByTestId } = render(<WidgetPartners widgetProps={{ ...widgetPropsMock, organizations: [] }} />);
        expect(getByTestId('countryInput')).toHaveAttribute('value', 'New Zealand');
    });
});
