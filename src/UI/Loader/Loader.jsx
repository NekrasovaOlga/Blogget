import React from 'react';
import style from './Loader.module.scss';
import CircleLoader from 'react-spinners/CircleLoader';

export const Loader = () => {
  return <CircleLoader color="#cc6633" css={{ display: 'block' }} size={30} />;
};
