import classes from "./Card.module.css";
import PropTypes from "prop-types";

const Card = (props) => {
  const preStyleObj = {
    maxWidth: props.maxWidth,
    height: props.height,
  };

  let classNames = `${props.className} ${classes.card} box-shadow border-radius-5`;
  return (
    <div
      className={classes.parent}
      style={{
        backgroundImage: `linear-gradient(#2c38a1a9, #2c38a1a9), url(${props.backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className={classNames} style={preStyleObj}>
        {props.children}
      </div>
    </div>
  );
};

Card.propTypes = {
  maxWidth: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  backgroundImage: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
