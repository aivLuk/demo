import { Outlet } from 'react-router-dom';
import { Menu } from '../../components';
import style from './main-layout.module.css';

export const MainLayout = () => {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main className={style.container}>
        <Outlet />
      </main>
    </>
  );
};
