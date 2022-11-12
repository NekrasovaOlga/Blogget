import axios from 'axios';
import { URL } from '../../api/const';

export const MODAL_REQUEST = 'MODAL_REQUEST';
export const MODAL_REQUEST_SUCCESS = 'MODAL_REQUEST_SUCCESS';
export const MODAL_REQUEST_ERROR = 'MODAL_REQUEST_ERROR';
export const UPDATE_MODAL = 'UPDATE_MODAL';
export const REMOVE_MODAL = 'REMOVE_MODAL';

export const modalRequest = (id) => ({
  type: MODAL_REQUEST,
  id,
});

export const modalRequestSuccess = (data) => ({
  type: MODAL_REQUEST_SUCCESS,
  data,
});

export const modalRequestError = (error) => ({
  type: MODAL_REQUEST_ERROR,
  error,
});

export const updateModal = (id) => ({
  type: UPDATE_MODAL,
  id,
});

export const removeModal = (data) => ({
  type: REMOVE_MODAL,
  data,
});

export const modalRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
  const id = getState().modal.id;

  if (!token) return;
  axios(`${URL}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(
      ({
        data: [
          {
            data: {
              children: [{ data: post }],
            },
          },
          {
            data: { children },
          },
        ],
      }) => {
        const comments = children.map((item) => item.data);
        const commentPost = { post, comments };
        dispatch(modalRequestSuccess(commentPost));
      }
    )
    .catch((err) => {
      dispatch(modalRequestError(err));
    });
};
