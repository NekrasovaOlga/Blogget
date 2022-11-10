import React from 'react';
import style from './Main.module.scss';

import { PostsContextProvider } from './../context/postsContext';

import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';

export const Main = (props) => {
  return (
    <main>
      <PostsContextProvider>
        <Layout>
          <Tabs />
          <List />
        </Layout>
      </PostsContextProvider>
    </main>
  );
};
