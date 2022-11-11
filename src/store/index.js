import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { tokenReducer, tokenMiddlewere } from './tokenReducer';
import { commentReducer } from './commentReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddlewere, thunk))
);
