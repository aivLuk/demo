import clsx from 'clsx';
import styles from './notification-box.module.css';

interface NotificationBoxProps {
  id: number;
  basketPosition: 'start' | 'center' | 'end';
}

export const NotificationBox = ({
  id,
  basketPosition,
}: NotificationBoxProps) => {
  return (
    <div
      className={clsx(
        styles.notificationBox,
        styles.fadeOut,
        styles[basketPosition],
      )}>
      order item No. {id}
    </div>
  );
};
