import axios from 'axios';
import { URL } from '../../api/const';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { postSlice } from './postSlice';

// export const POST_REQUEST = 'POST_REQUEST';
// export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
// export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';
// export const POST_REQUEST_SUCCESS_AFTER = 'POST_REQUEST_SUCCESS_AFTER';
// export const CHANGE_PAGE = 'CHANGE_PAGE';

// export const postRequest = () => ({
//   type: POST_REQUEST,
// });

// export const postRequestSuccess = (data) => ({
//   type: POST_REQUEST_SUCCESS,
//   data: data.children,
//   after: data.after,
// });

// export const postRequestSuccessAfter = (data) => ({
//   type: POST_REQUEST_SUCCESS_AFTER,
//   data: data.children,
//   after: data.after,
// });

// export const postRequestError = (error) => ({
//   type: POST_REQUEST_ERROR,
//   error,
// });

// export const changePage = (page) => ({
//   type: CHANGE_PAGE,
//   page,
// });

// export const postRequestAsync2 = (newPage) => (dispatch, getState) => {
//   let page = getState().post.page;

//   if (newPage) {
//     page = newPage;
//   }

//   const token = getState().token.token;
//   const after = getState().post.after;
//   const loading = getState().post.loading;
//   const isLast = getState().post.isLast;

//   if (!token || loading || isLast) return;

//   axios(`${URL}/${page}?limit=10${after ? `&after=${after}` : ''}`, {
//     headers: {
//       Authorization: `bearer ${token}`,
//     },
//   })
//     .then(({ data }) => {
//       if (!after) {
//         dispatch(postRequestSuccess(data.data));
//       } else {
//         dispatch(postRequestSuccessAfter(data.data));
//       }
//     })
//     .catch((err) => {
//       dispatch(postRequestError(err));
//     });
// };

export const postRequestAsync = createAsyncThunk(
  'post/fetch',
  (pageNew, { dispatch, getState }) => {
    let page = getState().post.page;
    if (pageNew) {
      page = pageNew;
      dispatch(postSlice.actions.changePage(page));
    }
    const token = getState().token.token;
    const after = getState().post.after;
    const isLast = getState().post.isLast;
    const loading = getState().post.loading;

    if (!token || isLast || loading) return;
    dispatch(postSlice.actions.postRequest());

    return axios(`${URL}/${page}?limit=10${after ? `&after=${after}` : ''}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(({ data }) => {
        if (!after) {
          dispatch(postSlice.actions.postRequestSuccess(data.data));
        } else {
          dispatch(postSlice.actions.postRequestSuccessAfter(data.data));
        }
      })
      .catch((err) => {
        return err.toString();
      });
  }
);
