import { Button } from '../../components';
import { useBasket } from '../../context';

export const Home = () => {
  const { addItem } = useBasket();

  const handleAddBasketItem = () => {
    const newItem = { id: Math.floor(Math.random() * 100) };
    addItem(newItem);
  };

  return (
    <>
      <Button onClick={handleAddBasketItem}>Add item</Button>
    </>
  );
};
