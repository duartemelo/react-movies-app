import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import IsolatedText from "../../components/atoms/IsolatedText/IsolatedText";
import Input from "../../components/molecules/Input/Input";
import Button from "../../components/molecules/Button/Button";
import classes from "./Register.module.css";
import useInput from "../../hooks/use-input";
import useValidateAccess from "../../hooks/use-validate-access";
import SpinnerContainer from "../../components/molecules/SpinnerContainer/SpinnerContainer";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/actions/auth-actions";

const Register = () => {
  const locState = useLocation(); // location state
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error);

  const navigate = useNavigate();

  const isValid = useValidateAccess();

  const initialEmail = locState.state !== null ? locState.state.email : "";

  useEffect(() => {
    if (isValid) {
      navigate("/popular/1");
    }
  }, [isValid, navigate]);

  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChanged,
    inputBlurHandler: nameBlur,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChanged,
    inputBlurHandler: emailBlur,
  } = useInput((value) => value.trim() !== "", initialEmail);

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChanged,
    inputBlurHandler: passwordBlur,
  } = useInput((value) => value.trim() !== "");

  const {
    value: confirmPassword,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordHasError,
    valueChangeHandler: confirmPasswordChanged,
    inputBlurHandler: confirmPasswordBlur,
  } = useInput((value) => value === password);

  const handleRegister = (e) => {
    e.preventDefault();
    const formIsValid =
      nameIsValid && emailIsValid && passwordIsValid && confirmPasswordIsValid;
    if (formIsValid) {
      dispatch(register(name, email, password));
    }
  };

  const handleLoginClick = () => {
    navigate("/login", { state: { email: email } });
  };

  const errorContent = (errorCode) =>
    errorCode.includes("not-found") || errorCode.includes("wrong-password")
      ? "Invalid credentials."
      : "There was an error, try again later.";

  if (!!isValid) {
    return <SpinnerContainer />;
  }

  return (
    <React.Fragment>
      <IsolatedText color="var(--blue)" fontWeight="700" fontSize="22px">
        React Movies App
      </IsolatedText>
      <form onSubmit={handleRegister}>
        <Input
          placeholder="Name"
          className="mt-4"
          value={name}
          onChange={nameChanged}
          onBlur={nameBlur}
          type="text"
          hasError={nameHasError}
          errorMessage={"Name can't be empty."}
          required
        />
        <Input
          placeholder="E-mail"
          className="mt-2"
          value={email}
          onChange={emailChanged}
          onBlur={emailBlur}
          type="email"
          hasError={emailHasError}
          errorMessage={"Email can't be empty."}
          required
        />
        <Input
          placeholder="Password"
          className="mt-2"
          value={password}
          onChange={passwordChanged}
          onBlur={passwordBlur}
          type="password"
          hasError={passwordHasError}
          errorMessage={"Password can't be empty."}
          required
        />
        <Input
          placeholder="Confirm password"
          className="mt-2"
          value={confirmPassword}
          onChange={confirmPasswordChanged}
          onBlur={confirmPasswordBlur}
          type="password"
          hasError={confirmPasswordHasError}
          errorMessage={"Passwords must match."}
          required
        />
        {error && (
          <IsolatedText
            color="var(--red)"
            fontWeight="600"
            fontSize="12px"
            paddingLeft="5px"
            className="mt-05"
          >
            {errorContent(error.errorCode)}
          </IsolatedText>
        )}
        <div className={classes["action-container"]}>
          <Button className="secondary" type="submit" loading={isLoading}>
            Register
          </Button>
          <Button className="active" type="button" onClick={handleLoginClick}>
            Login
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Register;
