import React from "react";
import useValidateAccess from "../../hooks/use-validate-access";
import SpinnerContainer from "../../components/molecules/SpinnerContainer/SpinnerContainer";

const PrivateLayout = (props) => {
  const isValid = useValidateAccess();

  if (!isValid) {
    return <SpinnerContainer />;
  }

  return <React.Fragment>{props.children}</React.Fragment>;
};

export default PrivateLayout;
