import { NavLink } from 'react-router-dom';
import styles from './menu.module.css';
import clsx from 'clsx';

export const Menu = () => {
  return (
    <menu className={styles.container}>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => clsx(isActive && styles.active)}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/task"
          className={({ isActive }) => clsx(isActive && styles.active)}>
          Task description
        </NavLink>
      </li>
    </menu>
  );
};
