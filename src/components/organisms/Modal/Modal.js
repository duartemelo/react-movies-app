import Button from "../../molecules/Button/Button";
import classes from "./Modal.module.css";
import PropTypes from "prop-types";

import { BiX } from "react-icons/bi";

const Modal = (props) => {

  // close modal then clicking on backdrop
  const handleBackdropClick = (event) => {
    if (event.target.classList.contains(classes["backdrop-container"])) {
      props.onClose();
    }
  };

  return (
    <div className={classes["backdrop-container"]} onClick={handleBackdropClick}>
      <div className={classes.modal}>
        <Button
          className={`active centered-text ${classes["close-button"]}`}
          width="40px"
          height="40px"
          paddingLeft="0"
          backgroundColor={"var(--dark-blue"}
          color="white"
          fontSize="25px"
          onClick={props.onClose}
        >
          <BiX />
        </Button>
        {props.children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
