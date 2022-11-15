import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL } from '../../api/const';

export const modalRequestAsync = createAsyncThunk(
  'comments/fetch',
  (id, { getState }) => {
    const token = getState().token.token;
    if (!token) return;
    return axios(`${URL}/comments/${id}`, {
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
          return { post, comments };
        }
      )
      .catch((err) => {
        return err.toString();
      });
  }
);
