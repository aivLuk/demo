import { useEffect } from 'react';
import { EventName } from '../models';

export const useEventSubscribe = <T>(
  event: EventName,
  handlerFn: (payload: T) => void, // eslint-disable-line no-unused-vars
) => {
  const eventHandler = (event: Event) => {
    const customEvent = event as CustomEvent;
    if (customEvent) {
      handlerFn(customEvent.detail);
    }
  };

  useEffect(() => {
    document.addEventListener(event, eventHandler);
    return () => {
      return document.removeEventListener(event, eventHandler);
    };
  }, [event]); // eslint-disable-line react-hooks/exhaustive-deps
};
