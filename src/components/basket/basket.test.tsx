import { render, screen } from '@testing-library/react';
import { Basket } from './basket';
import * as BasketContext from '../../context';

jest.mock('../../context', () => ({
  ...jest.requireActual('../../context'),
  useBasket: jest.fn(),
}));

test('renders notification box with correct text', () => {
  const notification = { id: 1 };
  (BasketContext.useBasket as jest.Mock).mockReturnValue({
    notification,
  });

  render(<Basket basketPosition="start" />);

  expect(screen.getByText('order item No. 1')).toBeInTheDocument();
});
