import React from 'react';
import style from './Heading.module.scss';
import { Text } from '../../../UI/Text';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

export const Heading = ({ text }) => {
  return (
    <Link className={style.linkPost} to={`/`}>
      <Text As="h1" size="22" tsize="26" className={style.heading}>
        {text}
      </Text>
    </Link>
  );
};

Heading.propTypes = {
  text: PropTypes.string,
};
