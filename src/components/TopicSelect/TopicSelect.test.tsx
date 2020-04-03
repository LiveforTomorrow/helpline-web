import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TopicSelect from '.';

describe('TopicSelect', () => {
    const topics = [{ name: 'happy' }, { name: 'sad' }];

    it('should contain correct text', () => {
        const { findByText } = render(<TopicSelect topics={topics} onChange={jest.fn()} />);
        expect(findByText('Select topics (optional)')).toBeTruthy();
    });

    it('should contain multiple chips', () => {
        const { getAllByTestId } = render(<TopicSelect topics={topics} onChange={jest.fn()} />);
        const elements = getAllByTestId('topicChip');
        expect(elements).toHaveLength(2);
    });

    it('should allow chip to be toggled', () => {
        let counter = 0;
        const onChange = (topics): void => {
            if (counter == 0) {
                expect(topics).toEqual([{ name: 'happy' }]);
            } else {
                expect(topics).toEqual([]);
            }
            counter += 1;
        };

        const { getAllByTestId } = render(<TopicSelect topics={topics} onChange={onChange} />);
        const elements = getAllByTestId('topicChip');
        fireEvent.click(elements[0]);
        fireEvent.click(elements[0]);
    });
});
