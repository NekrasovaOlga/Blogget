import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postRequestAsync } from '../store/post/postAction';

export const usePost = () => {
  const post = useSelector((state) => state.post.data);
  const token = useSelector((state) => state.token.token);
  const loading = useSelector((state) => state.post.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postRequestAsync());
  }, [token]);
  return [post, loading];
};
