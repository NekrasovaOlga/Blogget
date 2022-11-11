import React from 'react';
import classNames from 'classnames';
import style from './Text.module.scss';

import PropTypes from 'prop-types';

export const Text = (props) => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsize,
    dsize,
    fontWeight,
    className,
    children,
    href,
    onClick,
  } = props;

  const classes = classNames(
    className,
    style[color],
    style[fontWeight],
    { [style[`fs$[size]`]]: size },
    { [style[`fst${tsize}`]]: tsize },
    { [style[`fst${dsize}`]]: dsize }
  );

  return (
    <As className={classes} href={href} onClick={onClick}>
      {children}
    </As>
  );
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  tsize: PropTypes.string,
  dsize: PropTypes.string,
  fontWeight: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
  href: PropTypes.string,
};
