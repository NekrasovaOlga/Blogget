import React from 'react';
import style from './Auth.module.scss';

import { ReactComponent as AuthIcon } from './img/auth.svg';

export const Auth = (props) => {
  return (
    <button className={style.button}>
      <AuthIcon className={style.svg} />
    </button>
  );
};
