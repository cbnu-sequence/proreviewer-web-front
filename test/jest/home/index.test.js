import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../../../pages';

describe('홈', () => {
  it('홈 화면', () => {
    render(<HomePage />);

    const home = screen.getByText('홈');
    expect(home).toBeInTheDocument();
  });
});
