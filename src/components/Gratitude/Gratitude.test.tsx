import React from 'react';
import { render } from '@testing-library/react';
import Gratitude from '.';

describe('Gratitude', () => {
    it('should render gratitude', () => {
        const { getByRole } = render(<Gratitude />);
        expect(getByRole('heading', { name: 'Gratitude' })).toBeInTheDocument();
    });
    it('should contain correct links', () => {
        const { getByTestId } = render(<Gratitude />);
        expect(getByTestId('gravityLab')).toHaveAttribute('href', 'https://gravitylab.nz');
        expect(getByTestId('dataStory')).toHaveAttribute('href', 'https://www.datastory.nz');
        expect(getByTestId('polyForm')).toHaveAttribute('href', 'https://www.polyform.co');
        expect(getByTestId('searchRepublic')).toHaveAttribute('href', 'https://www.searchrepublic.co.nz');
    });
});
