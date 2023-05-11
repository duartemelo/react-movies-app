import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IsolatedText from "../../components/atoms/IsolatedText/IsolatedText";
import Input from "../../components/atoms/Input/Input";
import Button from "../../components/atoms/Button/Button";
import classes from "./Login.module.css";
import useInput from "../../hooks/use-input";
import useValidateAccess from "../../hooks/use-validate-access";
import SpinnerContainer from "../../components/molecules/SpinnerContainer/SpinnerContainer";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/auth-actions";

const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error);

  const navigate = useNavigate();

  const isValid = useValidateAccess();

  useEffect(() => {
    if (isValid) {
      navigate("/popular/1");
    }
  }, [isValid, navigate]);

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
      dispatch(login(email, password));
    }
  };

  const handleRegisterClick = () => {
    // TODO: pass email
    navigate("/register");
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
            Login
          </Button>
          <Button
            className="active"
            type="button"
            onClick={handleRegisterClick}
          >
            Register
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Login;
