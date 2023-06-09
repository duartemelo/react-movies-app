import React from "react";
import classes from "./Input.module.css";
import IsolatedText from "../../atoms/IsolatedText/IsolatedText";
import PropTypes from "prop-types";

const Input = (props) => {
  const classNames = `${props.className} ${classes["search-bar"]}`;
  return (
    <React.Fragment>
      <input
        className={classNames}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        type={props.type}
        required={props.required ? true : false}
      />
      {props.hasError && (
        <IsolatedText
          color="var(--red)"
          fontWeight="600"
          fontSize="12px"
          paddingLeft="5px"
          className="mt-05"
        >
          {props.errorMessage}
        </IsolatedText>
      )}
    </React.Fragment>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  type: PropTypes.string,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default Input;
