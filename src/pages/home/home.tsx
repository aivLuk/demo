import { EventName } from '../../models';
import { publishEvent } from '../../utils';
import { Button } from '../../components';

export const Home = () => {
  const handleAddBasketItem = () => {
    publishEvent(EventName.addBasketItem, {
      id: Math.floor(Math.random() * 100),
    });
  };

  return (
    <>
      <Button onClick={handleAddBasketItem}>Add item</Button>
    </>
  );
};
