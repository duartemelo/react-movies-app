import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Text from "../../components/atoms/Text/Text";
import Input from "../../components/molecules/Input/Input";
import Button from "../../components/molecules/Button/Button";
import classes from "./Login.module.css";
import useInput from "../../hooks/use-input";
import useValidateAccess from "../../hooks/use-validate-access";
import SpinnerContainer from "../../components/molecules/SpinnerContainer/SpinnerContainer";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/auth-actions";

const Login = () => {
  const locState = useLocation();
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

  const handleLogin = (e) => {
    e.preventDefault();
    if (emailIsValid && passwordIsValid) {
      dispatch(login(email, password));
    }
  };

  const handleRegisterClick = () => {
    navigate("/register", { state: { email: email } });
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
      <Text as="h1" color="var(--blue)" fontWeight="700" fontSize="22px">
        React Movies App
      </Text>
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
          <Text
            color="var(--red)"
            fontWeight="600"
            fontSize="12px"
            paddingLeft="5px"
            className="mt-05"
          >
            {errorContent(error.errorCode)}
          </Text>
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
