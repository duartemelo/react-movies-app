import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IsolatedText from "../../components/atoms/IsolatedText/IsolatedText";
import Input from "../../components/atoms/Input/Input";
import Button from "../../components/atoms/Button/Button";
import classes from "./Login.module.css";
import useFirebase from "../../hooks/use-firebase";

const Login = () => {
  // TODO: input validation!

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // TODO: use isLoading for spinner inside LoginButton
  const { isLoading, error, login } = useFirebase();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password, (userCredential) => {
      navigate("/popular/1");
    });
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
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />
        <Input
          placeholder="Password"
          className="mt-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        />
        {/* TODO: styling! */}
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
