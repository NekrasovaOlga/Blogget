import Header from './components/Header';
import Main from './components/Main';
import { useDispatch } from 'react-redux';
import { AuthContextProvider } from './components/context/authContext';
import { PostsContextProvider } from './components/context/postsContext';
import { updateToken } from './store/tokenReducer';
import { getToken } from './api/token';
export const App = () => {
  const dispatch = useDispatch();

  dispatch(updateToken(getToken()));
  return (
    <AuthContextProvider>
      <PostsContextProvider>
        <Header />
        <Main />
      </PostsContextProvider>
    </AuthContextProvider>
  );
};
