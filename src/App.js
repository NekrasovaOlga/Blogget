import Header from './components/Header';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { AuthContextProvider } from './components/context/authContext';
import { PostsContextProvider } from './components/context/postsContext';
import { store } from './store';
export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <PostsContextProvider>
          <Header />
          <Main />
        </PostsContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
