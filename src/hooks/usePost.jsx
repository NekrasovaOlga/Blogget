import { useEffect, useState, useContext } from 'react';
import { tokenContext } from '../components/context/token';
import { URL } from '../api/const';

export const usePost = () => {
  const { token } = useContext(tokenContext);
  const [post, setPost] = useState({});

  useEffect(() => {
    if (!token) return;
    fetch(`${URL}/best?limit=20`, {
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
        console.log(data);
        // тут перестал приходить children
        setPost(data.children);
      })
      .catch((err) => {});
  }, [token]);

  return [post, setPost];
};
