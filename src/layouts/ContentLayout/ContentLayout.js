import React from "react";
import Menu from "../../components/organisms/Menu/Menu";
import Nav from "../../components/molecules/Nav/Nav";
import Input from "../../components/atoms/Input/Input";
import classes from "./ContentLayout.module.css";

const ContentLayout = (props) => {
  return (
    <React.Fragment>
      <Menu />
      <div className={classes["right-container"]}>
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default ContentLayout;
