import { renderHook } from '@testing-library/react-hooks';
import useWindowSize from './useWindowSize';

test('should return new size of window', () => {
    const { result } = renderHook(() => useWindowSize());

    expect(result.current.width).toBe(1024);
    expect(result.current.height).toBe(768);
});
