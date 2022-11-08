import React from 'react';
import style from './Title.module.scss';
import { Text } from '../../../../../UI/Text';

export const Title = ({ title }) => {
  return (
    <h2 className={style.title}>
      <Text
        As="a"
        size="26"
        tsize="32"
        fontWeight="bold"
        className={style.linkPost}
        href="/"
      >
        {title}
      </Text>
    </h2>
  );
};
