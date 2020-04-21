import React from 'react';
import { render } from '@testing-library/react';
import OrganizationCarousel from '.';

describe('OrganizationCarousel', () => {
    it('should render without crashing', () => {
        render(<OrganizationCarousel />);
    });
});
