import React from 'react';
import style from './DeletePost.module.scss';
import { Text } from '../../../../../UI/Text';

import { ReactComponent as DeleteIcon } from './img/delete.svg';

export const DeletePost = (props) => {
  return (
    <Text
      As="button"
      color="grey99"
      className={style.delete}
      arial-label="Удалить пост"
    >
      <DeleteIcon />
    </Text>
  );
};
