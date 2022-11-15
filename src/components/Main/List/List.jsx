import style from './List.module.scss';
import Post from './Post';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postRequestAsync } from '../../../store/post/postAction';
import { Outlet, useParams } from 'react-router-dom';

export const List = () => {
  const post = useSelector((state) => state.post.data);
  const endList = useRef(null);
  const { page } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          dispatch(postRequestAsync());
        }
      },
      {
        rootMargin: '100px',
      }
    );
    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  useEffect(() => {
    dispatch(postRequestAsync(page));
  }, [page]);

  return (
    <>
      <ul className={style.list}>
        {post.map((item, index) => (
          <Post key={index} postData={item.data} />
        ))}
        <li ref={endList} className={style.end} />
      </ul>
      <Outlet />
    </>
  );
};
