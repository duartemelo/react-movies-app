import React from "react";
import useValidateAccess from "../../hooks/use-validate-access";
import { Navigate } from "react-router-dom";

const PrivateLayout = (props) => {
  const isValid = useValidateAccess();

  if (!isValid) {
    return <Navigate to={"/login"} />;
  }

  return <React.Fragment>{props.children}</React.Fragment>;
};

export default PrivateLayout;
