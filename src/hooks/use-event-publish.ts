import { EventName } from '../models';

export const useEventPublish = () => {
  return {
    publishEvent: <T>(eventName: EventName, payload?: T) => {
      const event = new CustomEvent(eventName, { detail: payload });
      document.dispatchEvent(event);
    },
  };
};
