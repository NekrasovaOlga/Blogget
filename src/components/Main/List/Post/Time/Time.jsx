import React from 'react';
import style from './Time.module.scss';
import { Text } from '../../../../../UI/Text';

import fromDate from '../../../../utils/formatDate';

export const Time = ({ date }) => {
  return (
    <Text
      As="time"
      color="grey66"
      size="12"
      fontWeight="bold"
      className={style.date}
      dateTime={date}
      tsize="16"
    >
      {fromDate(date)}
    </Text>
  );
};
