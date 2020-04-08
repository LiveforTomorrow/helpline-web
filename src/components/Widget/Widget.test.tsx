import React from 'react';
import { render } from '@testing-library/react';
import Widget from '.';

describe('Widget', () => {
    describe('country', () => {
        const country = { emergencyNumber: '111' };

        it('should contain correct text', () => {
            const { findByText } = render(<Widget country={country} />);
            expect(findByText('Are you or someone else in immediate danger?')).toBeTruthy();
        });

        it('should contain emergency link', () => {
            const { getByTestId } = render(<Widget country={country} />);
            const element = getByTestId('emergencyServicesButton');
            expect(element).toHaveAttribute('href', 'tel:111');
        });
    });
});
