import { render, screen } from '@testing-library/react';
import { it, describe } from 'vitest';

import { WrappedApp } from './App';
// import NotFound from './pages/NotFound';

describe('App', () => {
  it('renders keeks', () => {
    // ARRANGE
    render(<WrappedApp />);
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('initial test');
  });
  // it('renders not found', () => {
  //   // ARRANGE
  //   render(<NotFound />);
  //   // EXPECT
  //   expect(screen.getByRole())
  // });
});
