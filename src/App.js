import Header from './components/Header';
import Main from './components/Main';

import { useToken } from './hooks/useToken';
export const App = () => {
  const [token, delToken] = useToken('');

  return (
    <div>
      <Header token={token} delToken={delToken} />
      <Main />
    </div>
  );
};
