import { NavLink } from 'react-router-dom';
import styles from './menu.module.css';
import clsx from 'clsx';

const links = [
  { name: 'Home', link: '/', id: 1 },
  { name: 'Task description', link: '/task', id: 2 },
];

export const Menu = () => {
  return (
    <menu className={styles.container}>
      {links.map(({ name, link, id }) => (
        <li key={id}>
          <NavLink
            to={link}
            className={({ isActive }) => clsx(isActive && styles.active)}>
            {name}
          </NavLink>
        </li>
      ))}
    </menu>
  );
};
