import Header from './components/Header';
import Main from './components/Main';

import { useToken } from './hooks/useToken';
export const App = () => {
  const [token] = useToken('');
  return (
    <div>
      <Header token={token} />
      <Main />
    </div>
  );
};
