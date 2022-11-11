import { useEffect, useState, useContext } from 'react';
import { tokenContext } from '../components/context/token';
import { URL } from '../api/const';

export const useCommentsData = (id) => {
  const { token } = useContext(tokenContext);
  const [CommentsData, setCommentsData] = useState({ post: {}, comments: {} });
  useEffect(() => {
    if (!token) return;
    fetch(`${URL}/comments/${id}`, {
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
      .then(
        ([
          {
            data: {
              children: [{ data: post }],
            },
          },
          {
            data: { children },
          },
        ]) => {
          const comments = children.map((item) => item.data);

          setCommentsData({ post, comments });
        }
      )
      .catch((err) => {
        console.error(err);
      });
  }, [token]);

  return [CommentsData];
};
