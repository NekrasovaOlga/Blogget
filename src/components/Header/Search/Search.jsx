import React from 'react';
import style from './Search.module.scss';

import { ReactComponent as SearchIcon } from './img/search.svg';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchRequest } from '../../../store/search/searchAction';
import { useNavigate } from 'react-router-dom';

export const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchRequest(search));
    navigate('/search');
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.search}
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button type="submit" className={style.button}>
        <SearchIcon className={style.svg} />
      </button>
    </form>
  );
};
