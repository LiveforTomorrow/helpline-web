import React from 'react';
import { render } from '@testing-library/react';
import OrganizationCard from '.';

const organization = { name: 'Youthline', alwaysOpen: true, openingHours: [] };

describe('OrganizationCard', () => {
    it('should contain privacy link', () => {
        const { getByText } = render(<OrganizationCard organization={organization} />);
        expect(getByText(organization.name)).toBeTruthy();
    });
});
