import React from 'react';
import style from './Heading.module.scss';

import PropTypes from 'prop-types';

export class Heading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.text,
    };
  }

  render() {
    return <h1 className={style.heading}>{this.state.title}</h1>;
  }
}

Heading.propTypes = {
  text: PropTypes.string,
};
