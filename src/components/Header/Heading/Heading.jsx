import React from 'react';
import style from './Heading.module.scss';
import { Text } from '../../../UI/Text';

import PropTypes from 'prop-types';

export const Heading = ({ text }) => {
  return (
    <Text As="h1" size="22" tsize="26" className={style.heading}>
      {text}
    </Text>
  );
};

Heading.propTypes = {
  text: PropTypes.string,
};
