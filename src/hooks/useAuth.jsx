import { useEffect, useState } from 'react';
import { URL } from '../api/const';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken } from '../store';

export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

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
        dispatch(deleteToken());
      });
  }, [token]);

  const clearAuth = () => setAuth({});
  return [auth, clearAuth];
};
