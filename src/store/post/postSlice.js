import { createSlice } from '@reduxjs/toolkit';
import { postRequestAsync } from './postAction';

const initialState = {
  loading: false,
  status: '',
  data: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    postRequest: (state) => {
      state.error = '';
      state.status = 'loading';
      state.loading = true;
    },
    postRequestSuccess: (state, action) => {
      state.data = action.payload.children;
      state.error = '';
      state.status = 'loaded';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
      state.loading = false;
    },
    postRequestSuccessAfter: (state, action) => {
      state.data = [...state.data, ...action.payload.children];
      state.error = '';
      state.status = 'loaded';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
      state.loading = false;
    },
    changePage: (state, action) => {
      state.error = '';
      state.page = action.payload;
      state.after = '';
      state.isLast = false;
    },
    postRequestError: (state, action) => {
      state.error = action.error;
      state.status = 'error';
    },
  },
});

export default postSlice.reducer;
