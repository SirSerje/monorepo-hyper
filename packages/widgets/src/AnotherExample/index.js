import React from 'react';
import PropTypes from 'prop-types';

import './AnotherExample.scss';


const AnotherExample = ({name}) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="another-example">
    widgets > AnotherExample Component
    {name}
  </div>
);

AnotherExample.propTypes = {
  name: PropTypes.string,
};

AnotherExample.defaultProps = {
  name: 'some name',
};

export default AnotherExample;
