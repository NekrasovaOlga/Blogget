export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_REQUEST_SUCCESS = 'SEARCH_REQUEST_SUCCESS';
export const SEARCH_REQUEST_ERROR = 'SEARCH_REQUEST_ERROR';
export const SEARCH_REQUEST_AFTER = 'SEARCH_REQUEST_AFTER';
export const SEARCH_CHANGE_PAGE = 'SEARCH_CHANGE_PAGE';

export const searchRequest = (search) => ({
  type: SEARCH_REQUEST,
  search,
});

export const searchRequestSuccess = ({ children, after }) => ({
  type: SEARCH_REQUEST_SUCCESS,
  posts: children,
  after,
});

export const searchRequestSuccessAfter = ({ children, after }) => ({
  type: SEARCH_REQUEST_AFTER,
  posts: children,
  after,
});

export const searchChangePage = () => ({
  type: SEARCH_CHANGE_PAGE,
});
export const searchRequestError = (error) => ({
  type: SEARCH_REQUEST_ERROR,
  error,
});
