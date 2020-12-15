import React from 'react';
import { render } from '@testing-library/react';
import Gratitude from '.';

describe('Gratitude', () => {
    it('should render gratitude', () => {
        const { getByRole } = render(<Gratitude />);
        expect(getByRole('heading', { name: 'Gratitude' })).toBeInTheDocument();
    });
    it('should contain correct links', () => {
        const { getByAltText } = render(<Gratitude />);
        expect(getByAltText('Gravity Lab logo').parentElement).toHaveAttribute('href', 'https://gravitylab.nz');
        expect(getByAltText('DataStory logo').parentElement).toHaveAttribute('href', 'https://www.datastory.nz');
        expect(getByAltText('PolyForm logo').parentElement).toHaveAttribute('href', 'https://www.polyform.co');
        expect(getByAltText('Search Republic logo').parentElement).toHaveAttribute(
            'href',
            'https://www.searchrepublic.co.nz',
        );
    });
});
