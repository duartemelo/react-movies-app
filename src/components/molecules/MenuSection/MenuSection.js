import React from "react";

const MenuSection = (props) => {
  return <div className={props.className} style={props.style}>{props.children}</div>
}

export default MenuSection;