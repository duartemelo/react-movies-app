import React, { useState } from "react";
import IsolatedText from "../../components/atoms/IsolatedText/IsolatedText";
import Input from "../../components/atoms/Input/Input";
import Button from "../../components/atoms/Button/Button";
import classes from "./Login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  // TODO: input validation!

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    // TODO:  pass to hook!
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login successful
        const user = userCredential.user;
        console.log("Logged in as", user.email);
      })
      .catch((error) => {
        // Login failed
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.code);
        console.log(errorMessage);
        // setError(errorMessage);
      });
  };

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
