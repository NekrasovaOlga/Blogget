import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { searchRequest } from '../../../../store/search/searchAction';
import Post from '../Post';
import style from './SearchList.module.scss';

export const SearchList = (props) => {
  const posts = useSelector((state) => state.search.posts);
  const endList = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          dispatch(searchRequest());
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
  return (
    <>
      <ul className={style.list}>
        {posts.map((item, index) => (
          <Post key={index} postData={item.data} />
        ))}
        <li ref={endList} className={style.end} />
      </ul>
      <Outlet />
    </>
  );
};
