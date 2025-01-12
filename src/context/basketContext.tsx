import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Notification } from '../models';

interface BasketContextType {
  notification: Notification | null;
  addItem: (item: Notification) => void; //eslint-disable-line no-unused-vars
}

interface BasketProviderProps {
  children: ReactNode;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider: React.FC<BasketProviderProps> = ({ children }) => {
  const [notification, setNotification] = useState<Notification | null>(null);

  const addItem = (item: Notification) => {
    setNotification(item);
  };

  return (
    <BasketContext.Provider value={{ notification, addItem }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = (): BasketContextType => {
  const context = useContext(BasketContext);

  if (!context) {
    throw new Error('useBasket must be used within a BasketProvider');
  }

  return context;
};
