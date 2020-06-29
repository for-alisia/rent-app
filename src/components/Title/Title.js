import React from 'react';
import PropTypes from 'prop-types';

import './Title.scss';

const Title = (props) => {
  const { size = 'medium', isSubtitle = false, mb = '2rem' } = props;
  const classes = isSubtitle ? 'subtitle' : 'title';

  switch (size) {
    case 'small':
      return (
        <h5 className={classes} style={{ marginBottom: mb }}>
          {props.children}
        </h5>
      );
    case 'medium':
      return (
        <h3 className={classes} style={{ marginBottom: mb }}>
          {props.children}
        </h3>
      );
    case 'big':
      return (
        <h1 className={classes} style={{ marginBottom: mb }}>
          {props.children}
        </h1>
      );
    default:
      return (
        <h3 className={classes} style={{ marginBottom: mb }}>
          {props.children}
        </h3>
      );
  }
};

Title.propTypes = {
  size: PropTypes.string,
  isSubtitle: PropTypes.bool,
  mb: PropTypes.string,
};

export default Title;
