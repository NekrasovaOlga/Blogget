import { createSlice } from '@reduxjs/toolkit';
import { modalRequestAsync } from './modalAction';

const initialState = {
  status: 'loading',
  id: '',
  loading: false,
  post: {},
  comments: [],
  error: '',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {},
  extraReducers: {
    [modalRequestAsync.pending.type]: (state) => {
      state.error = '';
      state.status = 'loading';
    },
    [modalRequestAsync.fulfilled.type]: (state, action) => {
      state.post = action.payload.post;
      state.comments = action.payload.comments;
      state.error = '';
      state.status = 'loaded';
    },
    [modalRequestAsync.rejected.type]: (state, action) => {
      state.error = action.error;
      state.status = 'error';
    },
  },
});

export default modalSlice.reducer;
