import { tokenContext } from './components/context/token';
import Header from './components/Header';
import Main from './components/Main';
import { AuthContextProvider } from './components/context/authContext';
import { TokenContextProvider } from './components/context/token';

export const App = () => {
  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <Header />
        <Main />
      </AuthContextProvider>
    </TokenContextProvider>
  );
};
