import style from './List.module.scss';

import Post from './Post';
import { usePost } from '../../../hooks/usePost';
import Loader from '../../../UI/Loader';

export const List = () => {
  const [post, loading] = usePost();
  console.log(loading);
  const postDatas = [];
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

  return (
    <ul className={style.list}>
      {loading === true ? (
        <Loader />
      ) : (
        postDatas.map((postData, index) => (
          <Post key={index} postData={postData} />
        ))
      )}
    </ul>
  );
};
