import React from "react";
import IsolatedText from "../../components/atoms/IsolatedText/IsolatedText";
import Input from "../../components/atoms/Input/Input";
import Button from "../../components/atoms/Button/Button";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <React.Fragment>
      <IsolatedText color="var(--blue)" fontWeight="700" fontSize="22px">
        React Movies App
      </IsolatedText>
      <Input placeholder="E-mail" className="mt-4" />
      <Input placeholder="Password" className="mt-2" />
      <div className={classes["action-container"]}>
        <Button className="secondary">Login</Button>
        <Button className="active">Register</Button>
      </div>
    </React.Fragment>
  );
};

export default Login;
