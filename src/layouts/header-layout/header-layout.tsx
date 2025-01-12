import { Outlet } from 'react-router-dom';
import clsx from 'clsx';
import { Basket } from '../../components';
import style from './header-layout.module.css';

export const HeaderLayout = () => {
  const basketPosition = ['start', 'center', 'end'][
    Math.floor(Math.random() * 3)
  ] as 'start' | 'center' | 'end';

  return (
    <>
      <div className={clsx(style.subheader, style[basketPosition])}>
        <Basket basketPosition={basketPosition} />
      </div>
      <Outlet />
    </>
  );
};
