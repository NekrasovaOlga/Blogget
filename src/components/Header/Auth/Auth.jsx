import { useState, useContext } from 'react';
import style from './Auth.module.scss';
import { urlAuth } from '../../../api/auth';

import { Text } from '../../../UI/Text/Text';
import { ReactComponent as AuthIcon } from './img/auth.svg';
import { tokenContext } from '../../context/token';
import { authContext } from '../../context/authContext';

export const Auth = () => {
  const { delToken } = useContext(tokenContext);
  const [logout, setLogout] = useState(false);

  const { auth, clearAuth } = useContext(authContext);

  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button
            className={style.btn}
            onClick={() => {
              setLogout(true);
            }}
          >
            <img
              className={style.img}
              src={auth.img}
              title={auth.name}
              alt="Аватар"
            />
          </button>
          {logout && (
            <button
              className={style.logout}
              onClick={() => {
                setLogout(false);
                clearAuth();
                delToken();
              }}
            >
              Выйти
            </button>
          )}
        </>
      ) : (
        <Text As="a" className={style.authLink} href={urlAuth}>
          <AuthIcon className={style.svg} />
        </Text>
      )}
    </div>
  );
};
