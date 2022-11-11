import React from 'react';
import style from './Post.module.scss';
import PropTypes from 'prop-types';

import PostImage from './PostImage';
import Title from './Title';
import Autor from './Author';
import Raiting from './Raiting';
import Time from './Time';
import DeletePost from './DeletePost';

export const Post = ({ postData }) => {
  const { id, title, author, ups, date, img, selftext: markdown } = postData;
  return (
    <li className={style.post}>
      <PostImage title={title} img={img} />
      <div className={style.content}>
        <Title title={title} id={id} />
        <Autor author={author} />
      </div>
      <Raiting raiting={ups} />
      <Time date={date} />
      <DeletePost />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
