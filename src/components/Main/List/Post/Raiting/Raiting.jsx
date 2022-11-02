import React from 'react';
import style from './Raiting.module.scss';
import PropTypes from 'prop-types';

export const Raiting = ({ raiting }) => {
  return (
    <div className={style.rating}>
      <button className={style.up} arial-label="Увеличить рейтинг" />
      <p className={style.ups}>{raiting}</p>
      <button className={style.down} arial-label="Понизить рейтинг" />
    </div>
  );
};

Raiting.propTypes = {
  raiting: PropTypes.number,
};
