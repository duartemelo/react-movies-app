import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import classes from "./Menu.module.css";

import MenuSection from "../../atoms/MenuSection/MenuSection";
import Text from "../../atoms/Text/Text";
import Divider from "../../atoms/Divider/Divider";
import Image from "../../molecules/Image/Image";
import Button from "../../molecules/Button/Button";

import image from "../../../assets/img/profile-image.jpg";

import { logout } from "../../../services/auth";

import useHttp from "../../../hooks/use-http";
import { authActions } from "../../../store/slices/auth-slice";

import { BiLeftArrowAlt, BiMenu } from "react-icons/bi";

const Menu = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [genreButtons, setGenreButtons] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuClosing, setMobileMenuClosing] = useState(false);
  const { sendRequest: fetchGenres } = useHttp();
  const name = useSelector((state) => state.auth.name);

  const discoverButtons = [
    {
      section: "popular",
      link: "/popular/?page=1",
      text: "Popular",
    },
    {
      section: "trending",
      link: "/trending/?page=1",
      text: "Trending",
    },
    {
      section: "top-rated",
      link: "/top-rated/?page=1",
      text: "Top Rated",
    },
  ];

  useEffect(() => {
    fetchGenres({ url: "genre/movie/list" }, (data) => {
      setGenreButtons(
        data.genres.map((genre) => ({
          id: genre.id,
          section: genre.name.toLowerCase(),
          link: `/genre-${genre.name.toLowerCase()}/?page=1`,
          text: genre.name,
        }))
      );
    });
  }, [fetchGenres]);

  const getButtonClasses = (buttonLink, classNames) => {
    // buttonLink without page "/1 or /2 or /30" and with spaces replaced with "%20"
    const finalButtonLink = buttonLink
      .replace(" ", "%20")
      .toLowerCase()
      .split("/", 2)
      .join("/");

    // locationLink without page
    const finalLocationLink = location.pathname.split("/", 2).join("/");

    if (finalLocationLink === finalButtonLink) {
      return `${classNames} active no-animate`;
    } else {
      return classNames;
    }
  };

  const handleLogout = () => {
    dispatch(authActions.logout()); // REDUX
    logout(); // localStorage
    navigate("/login");
  };

  const handleMobileMenuClose = () => {
    setMobileMenuClosing(true);
    setTimeout(() => {
      setMobileMenuClosing(false);
      setMobileMenuOpen(false);
    }, 500);
  };

  const handleMobileMenuButtonClick = (buttonLink) => {
    if (props.isMobile) {
      handleMobileMenuClose();
    }
    navigate(buttonLink);
  };

  return (
    <>
      <div
        className={`${classes["menu-container"]} ${
          props.isMobile && !mobileMenuOpen ? classes["small-screen"] : ""
        } ${mobileMenuOpen && !mobileMenuClosing ? classes["slide-in"] : ""}  ${
          mobileMenuClosing ? classes["slide-out"] : ""
        }`}
      >
        {props.isMobile && !mobileMenuOpen ? (
          <>
            <MenuSection className={"mt-4"}>
              <Button
                className="active centered-text no-animate"
                width="40px"
                height="40px"
                paddingLeft="0"
                backgroundColor={"var(--dark-blue)"}
                color="white"
                fontSize="25px"
                onClick={() => setMobileMenuOpen(true)}
              >
                <BiMenu />
              </Button>
            </MenuSection>
          </>
        ) : (
          <>
            {props.isMobile && (
              <Button
                className={`active centered-text no-animate ${classes["close-menu"]}`}
                width="40px"
                height="40px"
                paddingLeft="0"
                backgroundColor={"var(--dark-blue"}
                color="white"
                fontSize="25px"
                onClick={handleMobileMenuClose}
              >
                <BiLeftArrowAlt />
              </Button>
            )}

            <MenuSection className={"mt-4"}>
              <Image
                imageSrc={image}
                alt="Profile image"
                width="130px"
                height="130px"
                borderRadius="5px"
                className="centered box-shadow"
              />
              <Text
                className="mt-2 centered-text"
                color="var(--white)"
                fontWeight="500"
                fontSize="14px"
                checkForLoading={true}
              >
                {name}
              </Text>
            </MenuSection>
            <Divider width="130px" className="mt-2 centered" />
            <MenuSection>
              <Text
                className="mt-3 centered"
                width="130px"
                display="block"
                color="#fff"
                fontSize="12px"
              >
                Discover
              </Text>
              {discoverButtons.map((button) => (
                <Button
                  key={button.section}
                  className={getButtonClasses(
                    button.link,
                    "centered block mt-1 box-shadow"
                  )}
                  onClick={() => handleMobileMenuButtonClick(button.link)}
                >
                  {button.text}
                </Button>
              ))}
            </MenuSection>
            <MenuSection>
              <Text
                className="mt-3 centered"
                width="130px"
                display="block"
                color="#fff"
                fontSize="12px"
              >
                Genres
              </Text>
              {genreButtons.map((button) => (
                <Button
                  key={button.section}
                  className={getButtonClasses(
                    button.link,
                    "centered block mt-1 box-shadow"
                  )}
                  onClick={() => handleMobileMenuButtonClick(button.link)}
                >
                  {button.text}
                </Button>
              ))}
            </MenuSection>
            <MenuSection>
              <Button
                className="centered block box-shadow active mt-3 mb-2"
                backgroundColor="var(--white)"
                color="var(--blue)"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </MenuSection>
          </>
        )}
      </div>
      {props.isMobile && mobileMenuOpen && !mobileMenuClosing && (
        <div className={classes.backdrop} onClick={handleMobileMenuClose}></div>
      )}
    </>
  );
};

export default Menu;
