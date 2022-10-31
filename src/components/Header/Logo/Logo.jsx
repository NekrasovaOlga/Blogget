import React from "react";
import style from "./Logo.module.scss";

import logo from "./img/logo.svg";

export const Logo = (props) => {
  return (
    <a className={style.link} href="/">
      <img className={style.logo} src={logo} alt="Логотоп Blogget" />
    </a>
  );
};
