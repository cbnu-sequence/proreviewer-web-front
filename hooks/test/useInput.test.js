import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useInput } from '../useInput';

describe('useInput 커스텀 훅 테스트', () => {
  it('useInput의 인자로 초깃값을 넣으면 value에 설정되어야 한다.', () => {
    const { result } = renderHook(() => useInput('initialData'));
    expect(result.current.value).toBe('initialData');
  });

  it('useInput의 onChange함수에 의해 value의 값이 변경되어야 한다. ', () => {
    const { result } = renderHook(() => useInput(''));
    act(() => {
      result.current.onChange({ target: { value: 'changeData' } });
    });
    expect(result.current.value).toBe('changeData');
  });
});
