import React from 'react';
import PropTypes from 'prop-types';
import './AnExample.scss';
import word from 'core';


const AnExample = ({ name }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="an-example">
    widgets > AnExample Component, core import : {word} prop name : {name}
  </div>
);

AnExample.propTypes = {
  name: PropTypes.string,
};

AnExample.defaultProps = {
  name: 'some name',
};

export default AnExample;
