import React from 'react';
import style from './Raiting.module.scss';
import PropTypes from 'prop-types';
import { Text } from '../../../../../UI/Text';

export const Raiting = ({ raiting }) => {
  return (
    <div className={style.rating}>
      <button className={style.up} arial-label="Увеличить рейтинг" />
      <Text As="p" size="12" tsize="16" color="grey66" fontWeight="bold">
        {raiting}
      </Text>
      <button className={style.down} arial-label="Понизить рейтинг" />
    </div>
  );
};

Raiting.propTypes = {
  raiting: PropTypes.number,
};
