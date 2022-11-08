import { useEffect, useState } from 'react';
import style from './Auth.module.scss';
import { urlAuth } from '../../../api/auth';
import { URL } from '../../../api/const';

import { Text } from '../../../UI/Text/Text';
import { ReactComponent as AuthIcon } from './img/auth.svg';

export const Auth = ({ token, delToken }) => {
  const [auth, setAuth] = useState({});
  const [logout, setLogout] = useState(false);
  console.log(delToken);
  useEffect(() => {
    if (!token) return;
    fetch(`${URL}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then(({ name, icon_img: iconImg }) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({ name, img });
      })
      .catch((err) => {
        setAuth({});
        delToken();
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
                setAuth({});
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
