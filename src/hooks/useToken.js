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
  }, []);

  return [token];
};
