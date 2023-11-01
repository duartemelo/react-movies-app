import React, { useEffect } from "react";
import Menu from "../../components/organisms/Menu/Menu";
import classes from "./ContentLayout.module.css";
import useWindowSize from "../../hooks/use-window-size";
import Spinner from "../../components/atoms/Spinner/Spinner";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

let searchTimer = null;

const ContentLayout = (props) => {
  const size = useWindowSize();
  const location = useLocation();
  const searchValue = useSelector((state) => state.searchState.search);
  const searchIsDirty = useSelector((state) => state.searchState.isDirty);
  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchIsDirty) {
      if (searchTimer) {
        clearTimeout(searchTimer);
      }

      const newTimer = setTimeout(() => {
        // se for página de filme, ou ator (person), tem de fazer o navigate para popular com as query strings
        const url = location.pathname;
        if (url.includes("person") || url.includes("film")) {
          navigate(
            `/popular?page=1${searchValue ? `&search=${searchValue}` : ""}`
          );
        } else {
          // caso contrário, só muda os searchParams
          setSearchParams({
            page: 1,
            ...(searchValue && { search: searchValue }),
          });
        }
      }, 500);

      return () => {
        clearTimeout(newTimer);
      };
    }
  }, [
    searchValue,
    setSearchParams,
    searchIsDirty,
    location.pathname,
    navigate,
  ]);

  return (
    <React.Fragment>
      {size.width === undefined ? (
        <Spinner />
      ) : (
        <>
          <Menu
            backButton={props.isInsideContent}
            isMobile={size.width <= 768}
          />
          <div className={classes["content-container"]}>{props.children}</div>
        </>
      )}
    </React.Fragment>
  );
};

export default ContentLayout;
