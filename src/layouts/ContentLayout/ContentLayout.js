import React from "react";
import Menu from "../../components/organisms/Menu/Menu";
import classes from "./ContentLayout.module.css";
import useWindowSize from "../../hooks/use-window-size";
import Spinner from "../../components/atoms/Spinner/Spinner";

const ContentLayout = (props) => {
  const size = useWindowSize();

  return (
    <React.Fragment>
      {size.width === undefined ? (
        <Spinner />
      ) : (
        <>
          <Menu isMobile={size.width <= 768} />
          <div
            className={`${classes["right-container"]} ${
              size.width <= 768 ? classes["small-screen"] : ""
            }`}
          >
            {props.children}
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default ContentLayout;
