import React from 'react';
import style from './Home.module.scss';

export const Home = (props) => {
  return (
    <div className={style.container}>
      <p className={style.title}>Добро пожаловать!</p>
      <p className={style.category}>Выберите категорию</p>
    </div>
  );
};
