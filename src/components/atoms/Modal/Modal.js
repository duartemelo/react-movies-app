import { useEffect } from "react";
import Button from "../../molecules/Button/Button";
import classes from "./Modal.module.css";
import PropTypes from "prop-types";

import { BiX } from "react-icons/bi";

const Modal = (props) => {
  useEffect(() => {
    document.getElementById("content-wrapper").classList.add("blur");
    document.body.style.overflow = "hidden"; // disable scroll

    return () => {
      document.getElementById("content-wrapper").classList.remove("blur");
      document.body.style.overflow = "auto"; // enable scroll
    };
  }, []);

  return (
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
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
