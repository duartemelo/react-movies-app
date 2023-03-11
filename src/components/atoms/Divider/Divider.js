import React from "react";

const Divider = (props) => {
  const styleObj = {
    width: props.width,
    height: props.height,
    borderRadius: props.borderRadius
  };

  return <hr className={props.className} style={styleObj}></hr>
}

export default Divider;