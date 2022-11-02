import React from 'react';
import style from './PostImage.module.scss';
import notphoto from './img/notphoto.jpg';

export const PostImage = ({ title }) => {
  return <img className={style.img} src={notphoto} alt={title} />;
};
