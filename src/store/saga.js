import { watchSearch } from './searchSaga';

export default function* rootSaga() {
  yield watchSearch();
}
