import React from 'react';
import style from './Title.module.scss';

export const Title = ({ title }) => {
  return (
    <h2 className={style.title}>
      <a className={style.linkPost} href="/">
        {title}
      </a>
    </h2>
  );
};
