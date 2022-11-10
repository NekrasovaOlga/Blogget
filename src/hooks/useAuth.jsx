import { useEffect, useState, useContext } from 'react';
import { tokenContext } from '../components/context/token';
import { URL } from '../api/const';

export const useAuth = () => {
  const [auth, setAuth] = useState({});

  const { token, delToken } = useContext(tokenContext);

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

  const clearAuth = () => setAuth({});
  return [auth, clearAuth];
};
