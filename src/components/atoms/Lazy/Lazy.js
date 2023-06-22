import classes from "./Lazy.module.css";
import PropTypes from "prop-types";

const Lazy = (props) => {
  const styleObj = {
    width: props.width,
    height: props.height,
    borderRadius: props.borderRadius,
    zIndex: props.zIndex,
  };

  return <div className={classes.lazy} style={styleObj}></div>;
};

Lazy.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  borderRadius: PropTypes.string,
  zIndex: PropTypes.number,
};

export default Lazy;
