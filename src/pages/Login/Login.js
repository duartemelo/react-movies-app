import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IsolatedText from "../../components/atoms/IsolatedText/IsolatedText";
import Input from "../../components/atoms/Input/Input";
import Button from "../../components/atoms/Button/Button";
import classes from "./Login.module.css";
import useFirebase from "../../hooks/use-firebase";
import useInput from "../../hooks/use-input";

const Login = () => {
  // TODO: input validation! (in progress)

  // TODO: use isLoading for spinner inside LoginButton
  const { isLoading, error, login } = useFirebase();
  const navigate = useNavigate();

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
        {emailHasError && <p>Email can't be empty.</p>}
        <Input
          placeholder="Password"
          className="mt-2"
          value={password}
          onChange={passwordChanged}
          onBlur={passwordBlur}
          type="password"
          required
        />
        {passwordHasError && <p>Password can't be empty.</p>}
        {error && <p>{errorContent(error.errorCode)}</p>}
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
