import React from 'react';
import style from './Search.module.scss';

import { ReactComponent as SearchIcon } from './img/search.svg';

export const Search = (props) => {
  return (
    <form className={style.form}>
      <input className={style.search} type="search" />
      <button type="submit" className={style.button}>
        <SearchIcon className={style.svg} />
      </button>
    </form>
  );
};
