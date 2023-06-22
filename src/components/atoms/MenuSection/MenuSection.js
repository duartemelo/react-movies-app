import React from "react";
import PropTypes from 'prop-types';

const MenuSection = (props) => {
  return <div className={props.className} style={props.style}>{props.children}</div>
}

MenuSection.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};

export default MenuSection;