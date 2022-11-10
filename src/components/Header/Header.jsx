import React from 'react';
import style from './Header.module.scss';

import Layout from '../Layout';

import Auth from './Auth';
import Logo from './Logo';
import Search from './Search';
import Heading from './Heading';

export const Header = () => {
  return (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo />
          <Heading text="Главная" />
          <Search />
          <Auth />
        </div>
      </Layout>
    </header>
  );
};
