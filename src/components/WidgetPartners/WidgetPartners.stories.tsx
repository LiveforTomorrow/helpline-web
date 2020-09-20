import React, { ReactElement } from 'react';
import { widgetPropsMock } from '../Widget/Widget.stories';
import WidgetPartners from '.';

export default {
    title: 'WidgetPartners',
};

export const Default = (): ReactElement => <WidgetPartners widgetProps={widgetPropsMock} />;
