import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { tokenReducer, tokenMiddlewere } from './tokenReducer';
import { commentReducer } from './commentReducer';
import thunk from 'redux-thunk';
import { authReducer } from './auth/authReducer';
import { postReducer } from './post/postReducer';
import { modalReducer } from './modal/modalReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
  auth: authReducer,
  modal: modalReducer,
  post: postReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddlewere, thunk))
);
