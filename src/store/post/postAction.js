import axios from 'axios';
import { URL } from '../../api/const';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { postSlice } from './postSlice';

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
