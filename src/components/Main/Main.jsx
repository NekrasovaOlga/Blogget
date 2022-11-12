import React from 'react';

import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';

export const Main = () => {
  return (
    <main>
      <Layout>
        <Tabs />
        <List />
      </Layout>
    </main>
  );
};
