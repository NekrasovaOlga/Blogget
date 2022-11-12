import {
  MODAL_REQUEST,
  MODAL_REQUEST_ERROR,
  MODAL_REQUEST_SUCCESS,
  UPDATE_MODAL,
  REMOVE_MODAL,
  RENDER_MODAL,
} from './modalAction';

const initialState = {
  status: 'loading',
  id: '',
  loading: false,
  data: { post: {}, comments: {} },
  error: '',
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case MODAL_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
        status: 'loaded',
      };
    case MODAL_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        status: 'error',
      };
    case UPDATE_MODAL:
      return {
        ...state,
        id: action.id,
        status: 'loading',
      };
    case REMOVE_MODAL:
      return {
        ...state,
        data: { post: {}, comments: {} },
        status: 'loading',
      };
    case RENDER_MODAL:
      return {
        ...state,
        id: action.id,
      };
    default:
      return state;
  }
};
