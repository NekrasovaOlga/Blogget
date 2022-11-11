import Header from './components/Header';
import Main from './components/Main';
import { AuthContextProvider } from './components/context/authContext';
import { TokenContextProvider } from './components/context/token';
import { PostsContextProvider } from './components/context/postsContext';
import { CommentContextProvider } from './components/context/commentContext';

export const App = () => {
  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <PostsContextProvider>
          <CommentContextProvider>
            <Header />
            <Main />
          </CommentContextProvider>
        </PostsContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  );
};
