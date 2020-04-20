import React from 'react';
import { render } from '@testing-library/react';
import OrganizationCarousel from './OrganizationCarousel';

describe('OrganizationCarousel', () => {
    it('should render children', () => {
        const { getByText } = render(
            <OrganizationCarousel>
                <h1>test</h1>
            </OrganizationCarousel>,
        );
        expect(getByText('test')).toBeTruthy();
    });
});
