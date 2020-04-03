import React from 'react';
import { render } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
    it('should contain privacy link', () => {
        const { getByTestId } = render(<Footer />);
        expect(getByTestId('privacy')).toHaveAttribute('href', '/privacy');
    });

    it('should contain about link', () => {
        const { getByTestId } = render(<Footer />);
        expect(getByTestId('about')).toHaveAttribute('href', '/about');
    });

    it('should contain contact link', () => {
        const { getByTestId } = render(<Footer />);
        expect(getByTestId('contact')).toHaveAttribute('href', 'mailto:elliot@livefortomorrow.co');
    });

    it('should contain crowdsource link', () => {
        const { getByTestId } = render(<Footer />);
        expect(getByTestId('crowdsource')).toHaveAttribute('href', 'https://zealnz.typeform.com/to/BtdlLP');
    });

    it('should have correct text', () => {
        const { getByText } = render(<Footer />);
        expect(getByText(`Powered by Live For Tomorrow © ${new Date().getFullYear()}`)).toBeTruthy();
    });
});
