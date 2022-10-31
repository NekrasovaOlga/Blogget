import React from 'react';
import style from './Layout.module.scss';

export const Layout = ({children}) => {
    return <div className={style.container}>{children}</div>
}