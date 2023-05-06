import React from "react";
import Card from "../../components/atoms/Card/Card";

const AuthLayout = (props) => {
  return (
    <React.Fragment>
      <Card maxWidth="600px" height="500px">
        {props.children}
      </Card>
    </React.Fragment>
  );
};

export default AuthLayout;
