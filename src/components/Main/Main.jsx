import React from 'react';
import style from './Main.module.scss';

import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';

export const Main = (props) => {
  return (
    <main>
      <Layout>
        <Tabs />
        <List />
      </Layout>
    </main>
  );
};
