import React, { ReactElement } from 'react';
import { LocalityEnum } from '../../../types/globalTypes';
import WidgetSearch from '.';

export default {
    title: 'WidgetSearch',
};

export const Default = (): ReactElement => (
    <WidgetSearch
        countries={[
            { code: 'AU', name: 'Australia', subdivisions: [], locality: LocalityEnum.LOCATION },
            {
                code: 'NZ',
                name: 'New Zealand',
                subdivisions: [
                    { name: 'Bay of Plenty', code: 'BOP' },
                    { name: 'Auckland', code: 'AUK' },
                ],
                locality: LocalityEnum.LOCATION,
            },
        ]}
        preselectedCountry={{
            code: 'NZ',
            name: 'New Zealand',
            subdivisions: [
                { name: 'Bay of Plenty', code: 'BOP' },
                { name: 'Auckland', code: 'AUK' },
            ],
            locality: LocalityEnum.LOCATION,
        }}
    />
);

Default.story = {
    parameters: { chromatic: { diffThreshold: 0.7 } },
};
