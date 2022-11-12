import axios from 'axios';
import { URL } from '../../api/const';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';

export const postRequest = () => ({
  type: POST_REQUEST,
});

export const postRequestSuccess = (data) => ({
  type: POST_REQUEST_SUCCESS,
  data,
});

export const postRequestError = (error) => ({
  type: POST_REQUEST_ERROR,
  error,
});

export const postRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
  if (!token) return;
  dispatch(postRequest());
  if (!token) return;
  axios(`${URL}/best?limit=35`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({ data: { data: dataPosts } }) => {
      const { children } = dataPosts;
      dispatch(postRequestSuccess(children));
    })
    .catch((err) => {
      dispatch(postRequestError(err));
    });
};
