import React from 'react';
import style from './List.module.scss';

import Post from './Post';

export const List = (props) => {
  const postData = {
    thumbnail: '',
    title: 'Title',
    author: 'Nickname',
    ups: 24,
    date: '2022-02-24T09:45:00.00Z',
  };

  return (
    <ul className={style.list}>
      <Post postData={postData} />
    </ul>
  );
};
