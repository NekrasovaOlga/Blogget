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
    <As className={classes} href={href}>
      {children}
    </As>
  );
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  fontWeight: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  href: PropTypes.string,
};
