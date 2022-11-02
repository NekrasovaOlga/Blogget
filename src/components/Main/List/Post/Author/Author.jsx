import React from 'react';
import style from './Author.module.scss';

export const Author = ({ author }) => {
  return (
    <a className={style.linkAuthor} href="#author">
      {author}
    </a>
  );
};
