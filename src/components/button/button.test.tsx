import { render, screen } from '@testing-library/react';
import { Button } from './button';

test('renders button with correct text', () => {
  render(<Button>Click Me</Button>);

  const button = screen.getByRole('button', { name: /Click Me/i });
  expect(button).toBeInTheDocument();
});
