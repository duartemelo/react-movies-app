import React from "react";
import PropTypes from 'prop-types';

const Divider = (props) => {
  const styleObj = {
    width: props.width,
    height: props.height,
    borderRadius: props.borderRadius
  };

  return <hr className={props.className} style={styleObj}></hr>
}

Divider.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  className: PropTypes.string,
};

export default Divider;