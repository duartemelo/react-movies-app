import React from "react";

const IsolatedText = (props) => {
  const styleObj = {
    color: props.color,
    fontWeight: props.fontWeight,
    fontSize: props.fontSize,
    width: props.width,
    display: props.display
  };

  return(
    <p className={props.className} style={styleObj}>{props.children}</p>
  )
}

export default IsolatedText;