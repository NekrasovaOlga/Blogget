import React from 'react';
import style from './Comments.module.scss';
import { Text } from '../../../UI/Text/Text';
import fromDate from '../../utils/formatDate';

export const Comments = ({ comments }) => {
  return (
    <ul className={style.list}>
      {comments.length > 0 ? (
        comments.map(
          (data) =>
            data.body && (
              <li key={data.id} className={style.item}>
                <Text As="h3" className={style.author} size="18" tsize="22">
                  {data.name}
                </Text>
                <Text As="p" className={style.comment} size="14" tsize="18">
                  {data.body}
                </Text>
                <Text As="time">{fromDate(data.created)} </Text>
              </li>
            )
        )
      ) : (
        <p>Нет комментариев</p>
      )}
    </ul>
  );
};
