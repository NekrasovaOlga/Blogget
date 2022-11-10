import React from 'react';
import style from './PostImage.module.scss';
import notphoto from './img/notphoto.jpg';

export const PostImage = ({ title, img }) => {
  return <img className={style.img} src={img} alt={title} />;
};
