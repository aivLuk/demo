import clsx from 'clsx';
import styles from './notification-box.module.css';

interface NotificationBoxProps {
  id: number;
}

export const NotificationBox = ({ id }: NotificationBoxProps) => {
  return (
    <div className={clsx(styles.notificationBox, styles.fadeOut)}>
      order item No. {id}
    </div>
  );
};
