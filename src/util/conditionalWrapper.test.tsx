import React from 'react';
import { render } from '@testing-library/react';
import ConditionalWrapper from './conditionalWrapper';

describe('ConditionalWrapper', () => {
    it('Should wrap when true', () => {
        const { getByText } = render(
            <ConditionalWrapper condition={true} wrapper={(children): JSX.Element => <a href="/">{children}</a>}>
                <p>Content</p>
            </ConditionalWrapper>,
        );
        expect(getByText('Content')).toBeInTheDocument();
    });
    it('Should not wrap when false', () => {
        const { getByText } = render(
            <ConditionalWrapper condition={false} wrapper={(children): JSX.Element => <a href="/">{children}</a>}>
                <p>Content does not appear</p>
            </ConditionalWrapper>,
        );
        expect(getByText('Content')).not.toBeInTheDocument();
    });
});
