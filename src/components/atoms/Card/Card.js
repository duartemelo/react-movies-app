import classes from "./Card.module.css";

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
      {/* TODO: set background image to parent */}
      <div className={classNames} style={preStyleObj}>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
