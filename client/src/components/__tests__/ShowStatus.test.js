import { renderHook } from '@testing-library/react-hooks';
import useShowStatus from '../../utils/useShowStatus';

describe('useShowStatus', () => {
  test('should return true initially', () => {
    const { result } = renderHook(() => useShowStatus());
    expect(result.current).toBe(true);
  });

  test('should update status to false when offline event is triggered', () => {
    const { result } = renderHook(() => useShowStatus());
    expect(result.current).toBe(true); 

    window.dispatchEvent(new Event('offline'));

    expect(result.current).toBe(false); 
  });

  test('should update status to true when online event is triggered', () => {
    const { result } = renderHook(() => useShowStatus());

    
    window.dispatchEvent(new Event('offline'));

    window.dispatchEvent(new Event('online'));

    expect(result.current).toBe(true); 
  });
});
