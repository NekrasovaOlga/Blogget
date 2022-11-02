import React from 'react';
import style from './Time.module.scss';

import fromDate from '../../../../utils/formatDate';

export const Time = ({ date }) => {
  return (
    <time className={style.date} dateTime={date}>
      {fromDate(date)}
    </time>
  );
};
