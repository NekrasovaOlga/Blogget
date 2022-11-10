import { useContext } from 'react';
import style from './List.module.scss';
import { postsContext } from '../../context/postsContext';

import { usePost } from '../../../hooks/usePost';
import Post from './Post';

export const List = () => {
  const { post } = useContext(postsContext);
  console.log(post);
  const postDatas = [];

  return (
    <ul className={style.list}>
      {postDatas.map((postData, index) => (
        <Post key={index} postData={postData} />
      ))}
    </ul>
  );
};
