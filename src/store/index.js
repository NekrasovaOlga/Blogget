import { tokenReducer, tokenMiddlewere } from './tokenReducer';
import { commentReducer } from './commentReducer';
import { authReducer } from './auth/authReducer';
import modalReducer from './modal/modalSlice';
import postReducer from './post/postSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    comment: commentReducer,
    auth: authReducer,
    modal: modalReducer,
    post: postReducer,
  },
  moddleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddlewere),
});
