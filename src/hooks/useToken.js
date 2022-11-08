import { useState, useEffect } from 'react';

export const useToken = (state) => {
  const [token, setToken] = useState(state);

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    if (location.pathname.includes('/auth')) {
      // eslint-disable-next-line no-restricted-globals
      const token = new URLSearchParams(location.hash.substring(1)).get(
        'access_token'
      );
      setToken(token);
    }
    if (localStorage.getItem('bearer')) {
      setToken(localStorage.getItem('bearer'));
    } else {
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('bearer', token);
    }
  }, [token]);

  const delToken = () => {
    localStorage.setItem('bearer', '');
    setToken('');

    return token;
  };

  const result = [token, delToken];
  return result;
};
