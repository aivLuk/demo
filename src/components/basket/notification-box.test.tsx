import { render, screen } from '@testing-library/react';
import { NotificationBox } from './notification-box';

test('renders notification box with correct text', () => {
  render(<NotificationBox id={1} basketPosition="start" />);

  expect(screen.getByText('order item No. 1')).toBeInTheDocument();
});
