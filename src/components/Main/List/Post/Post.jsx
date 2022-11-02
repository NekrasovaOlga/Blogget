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
  const { title, author, ups, date } = postData;
  return (
    <li className={style.post}>
      <PostImage title={title} />
      <div className={style.content}>
        <Title title={title} />
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

/*
Все компоненты разделяются как отдельные кирпичики

Все делается для улучшения читабельности кода

Удобство взаимодействия с каждым компонентом по отдельности

Не знаю даже что еще писать) сделала как поняла

*/
