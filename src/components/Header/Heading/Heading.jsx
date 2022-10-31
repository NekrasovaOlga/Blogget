import React from "react";
import style from "./Heading.module.scss";

export const Heading = ({ text }) => {
  return <h1 className={style.heading}>{text}</h1>;
};
