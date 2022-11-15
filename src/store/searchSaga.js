import { put, select, takeLatest } from 'redux-saga/effects';
import { URL } from '../api/const';
import axios from 'axios';
import {
  searchRequestError,
  searchRequestSuccess,
  searchRequestSuccessAfter,
  SEARCH_REQUEST,
} from './search/searchAction';

function* fetchSearch(searchNew) {
  let search = yield select((state) => state.search.search);
  const token = yield select((state) => state.token.token);
  let after = yield select((state) => state.search.after);
  if (searchNew.search) {
    search = searchNew.search;
    after = '';
  }
  try {
    const request = yield axios(
      `${URL}/search?q=${search}${after ? `&after=${after}` : ''}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    if (!after) {
      yield put(searchRequestSuccess(request.data.data));
    } else {
      yield put(searchRequestSuccessAfter(request.data.data));
    }
  } catch (e) {
    yield put(searchRequestError(e));
  }
}

export function* watchSearch() {
  yield takeLatest(SEARCH_REQUEST, fetchSearch);
}
