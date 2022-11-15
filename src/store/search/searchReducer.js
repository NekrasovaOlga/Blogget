import {
  SEARCH_CHANGE_PAGE,
  SEARCH_REQUEST,
  SEARCH_REQUEST_AFTER,
  SEARCH_REQUEST_ERROR,
  SEARCH_REQUEST_SUCCESS,
} from './searchAction';

const initialState = {
  loading: false,
  posts: [],
  after: '',
  page: '',
  search: '',
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
        search: action.search ? action.search : state.search,
      };
    case SEARCH_REQUEST_SUCCESS:
      return {
        ...state,
        loading: true,
        error: '',
        posts: action.posts,
        after: action.after,
      };
    case SEARCH_REQUEST_AFTER:
      return {
        ...state,
        loading: true,
        error: '',
        posts: [...state.posts, ...action.posts],
        after: action.after,
      };
    case SEARCH_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SEARCH_CHANGE_PAGE:
      console.log(action);
      return {
        after: '',
        error: '',
      };
    default:
      return state;
  }
};
