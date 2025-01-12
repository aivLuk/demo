import { useBasket } from '../../context';
import { BiBasket } from 'react-icons/bi';
import { NotificationBox } from './notification-box';

interface BasketProps {
  basketPosition: 'start' | 'center' | 'end';
}

export const Basket = ({ basketPosition }: BasketProps) => {
  const { notification } = useBasket();

  return (
    <div>
      <BiBasket size={25} title="basket" />
      {notification && (
        <NotificationBox
          key={notification.id}
          id={notification.id}
          basketPosition={basketPosition}
        />
      )}
    </div>
  );
};
