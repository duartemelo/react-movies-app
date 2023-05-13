import React from "react";
import useValidateAccess from "../../hooks/use-validate-access";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SpinnerContainer from "../../components/molecules/SpinnerContainer/SpinnerContainer";  

const PrivateLayout = (props) => {
  const isValid = useValidateAccess();
  const isLoading = useSelector((state) => state.auth.isLoading);

  if (isLoading) {
    return <SpinnerContainer />
  }

  if (!isValid) {
    return <Navigate to={"/login"} />;
  }

  return <React.Fragment>{props.children}</React.Fragment>;
};

export default PrivateLayout;
