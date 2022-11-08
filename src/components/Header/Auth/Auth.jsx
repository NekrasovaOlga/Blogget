import { useEffect, useState } from 'react';
import style from './Auth.module.scss';
import { urlAuth } from '../../../api/auth';
import { URL } from '../../../api/const';

import { Text } from '../../../UI/Text/Text';
import { ReactComponent as AuthIcon } from './img/auth.svg';

export const Auth = ({ token }) => {
  const [auth, setAuth] = useState({});
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    if (!token) return;
    fetch(`${URL}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        //const img = iconImg.replace(/\?.*$/, '');
        //setAuth({ name: data.name, img: '' });
      });
  }, [token]);

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
                //setAuth({});
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
