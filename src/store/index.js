import { tokenReducer, tokenMiddlewere } from './tokenReducer';
import { commentReducer } from './commentReducer';
import { authReducer } from './auth/authReducer';
import modalReducer from './modal/modalSlice';
import postReducer from './post/postSlice';
import { searchReducer } from '../store/search/searchReducer';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    comment: commentReducer,
    auth: authReducer,
    modal: modalReducer,
    post: postReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddlewere, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
