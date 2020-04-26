import React from 'react';
import { render } from '@testing-library/react';
import OrganizationEmpty from '.';

describe('OrganizationEmpty', () => {
    it('should have open element', () => {
        const { getByText } = render(<OrganizationEmpty />);
        expect(getByText('We’ve hunted high and low, but no helplines match that search criteria.')).toBeTruthy();
    });
});
