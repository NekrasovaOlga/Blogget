import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { URL } from '../api/const';

export const usePost = () => {
  const token = useSelector((state) => state.token);

  const [post, setPost] = useState({});

  useEffect(() => {
    if (!token) return;
    fetch(`${URL}/best?limit=35`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(({ data }) => {
        setPost(data.children);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  return [post, setPost];
};
