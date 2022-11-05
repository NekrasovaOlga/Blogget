import React from 'react';
import style from './List.module.scss';

import Post from './Post';

export const List = (props) => {
  const postDatas = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 24,
      date: '2022-02-24T09:45:00.00Z',
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 3,
      date: '2022-12-24T09:45:00.00Z',
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 4,
      date: '2022-02-20T09:45:00.00Z',
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 124,
      date: '2022-08-04T09:45:00.00Z',
    },
  ];

  return (
    <ul className={style.list}>
      {postDatas.map((postData, index) => (
        <Post key={index} postData={postData} />
      ))}
    </ul>
  );
};
