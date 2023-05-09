import React from "react";
import { useNavigate } from "react-router-dom";
import IsolatedText from "../../components/atoms/IsolatedText/IsolatedText";
import Input from "../../components/atoms/Input/Input";
import Button from "../../components/atoms/Button/Button";
import classes from "./Login.module.css";
import useFirebase from "../../hooks/use-firebase";
import useInput from "../../hooks/use-input";
import useValidateAccess from "../../hooks/use-validate-access";
import SpinnerContainer from "../../components/molecules/SpinnerContainer/SpinnerContainer";

const Login = () => {
  // TODO: use isLoading for spinner inside LoginButton
  const { isLoading, error, login } = useFirebase();
  const navigate = useNavigate();

  const isValid = useValidateAccess();
  if (isValid) {
    navigate("/popular/1");
  }

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChanged,
    inputBlurHandler: emailBlur,
  } = useInput((value) => value.trim() !== "");

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChanged,
    inputBlurHandler: passwordBlur,
  } = useInput((value) => value.trim() !== "");

  const handleLogin = (e) => {
    e.preventDefault();
    if (emailIsValid && passwordIsValid) {
      login(email, password, () => {
        navigate("/popular/1");
      });
    }
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
      <form onSubmit={handleLogin}>
        <Input
          placeholder="E-mail"
          className="mt-4"
          value={email}
          onChange={emailChanged}
          onBlur={emailBlur}
          type="email"
          required
        />
        {emailHasError && (
          <IsolatedText
            color="var(--red)"
            fontWeight="600"
            fontSize="12px"
            paddingLeft="5px"
            className="mt-05"
          >
            Email can't be empty.
          </IsolatedText>
        )}
        <Input
          placeholder="Password"
          className="mt-2"
          value={password}
          onChange={passwordChanged}
          onBlur={passwordBlur}
          type="password"
          required
        />
        {passwordHasError && (
          <IsolatedText
            color="var(--red)"
            fontWeight="600"
            fontSize="12px"
            paddingLeft="5px"
            className="mt-05"
          >
            Password can't be empty.
          </IsolatedText>
        )}
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
          <Button className="secondary" type="submit">
            Login
          </Button>
          <Button className="active" type="button">
            Register
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Login;
