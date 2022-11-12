import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalRequestAsync } from '../store/modal/modalAction';

export const useCommentsData = () => {
  const CommentsData = useSelector((state) => state.modal.data);
  const token = useSelector((state) => state.token.token);
  const status = useSelector((state) => state.modal.status);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(modalRequestAsync());
  }, [token]);
  return [CommentsData, status];
};
