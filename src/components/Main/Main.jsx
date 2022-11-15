import React from 'react';

import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import { Route, Routes } from 'react-router-dom';
import Modal from '../Modal';
import NotFound from '../NotFound';
import Home from '../Home';
import SearchList from '../Main/List/SearchList';

export const Main = () => {
  return (
    <main>
      <Layout>
        <Tabs />
        <Routes>
          <Route path="/category/:page" element={<List />}>
            <Route path="post/:id" element={<Modal />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchList />} />
        </Routes>
      </Layout>
    </main>
  );
};
