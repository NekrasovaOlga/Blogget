import { useContext } from 'react';
import style from './List.module.scss';
import { postsContext } from '../../context/postsContext';
import Post from './Post';

export const List = () => {
  const { post } = useContext(postsContext);
  const postDatas = [];
  console.log(post);
  if (post.length > 0) {
    post.forEach((item) => {
      const itemPost = item.data;
      const { id, title, author, ups, created, thumbnail } = itemPost;
      const newPost = {
        id,
        title,
        author,
        ups,
        date: created,
        img: thumbnail,
      };
      postDatas.push(newPost);
    });
  }

  return (
    <ul className={style.list}>
      {postDatas.map((postData, index) => (
        <Post key={index} postData={postData} />
      ))}
    </ul>
  );
};
