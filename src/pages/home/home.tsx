import { EventName } from '../../models';
import { useEventPublish } from '../../hooks';
import { Button } from '../../components';

export const Home = () => {
  const { publishEvent } = useEventPublish();

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
