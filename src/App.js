import { tokenContext } from './components/context/token';
import Header from './components/Header';
import Main from './components/Main';
import { AuthContextProvider } from './components/context/authContext';
import { TokenContextProvider } from './components/context/token';
import { PostsContextProvider } from './components/context/postsContext';

export const App = () => {
  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <PostsContextProvider>
          <Header />
          <Main />
        </PostsContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  );
};
