import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../../../pages';

describe('홈', () => {
  it('초기 셋팅 확인 (삭제 예정)', () => {
    render(<HomePage />);

    const home = screen.getByText('홈');
    expect(home).toBeInTheDocument();
  });
});
