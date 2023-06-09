import React, { useEffect, useState } from "react";
import classes from "./Menu.module.css";
import MenuSection from "../../atoms/MenuSection/MenuSection";
import IsolatedText from "../../atoms/IsolatedText/IsolatedText";
import Divider from "../../atoms/Divider/Divider";
import Image from "../../molecules/Image/Image";
import Button from "../../molecules/Button/Button";
import image from "../../../assets/img/profile-image.jpg";
import { logout } from "../../../services/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "../../../hooks/use-http";
import { authActions } from "../../../store/slices/auth-slice";

import { BiMenu } from "react-icons/bi";

/*
TODO: close menu button style
close menu button animation
when expanding mobile menu, blur the rest of the layout
when clicking on the blur area, close the menu
when clicking a button on the mobile menu, close it
*/

const Menu = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [genreButtons, setGenreButtons] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { sendRequest: fetchFilms } = useHttp();
  const name = useSelector((state) => state.auth.name);

  const discoverButtons = [
    {
      section: "popular",
      link: "/popular/1",
      text: "Popular",
    },
    {
      section: "trending",
      link: "/trending/1",
      text: "Trending",
    },
    {
      section: "top-rated",
      link: "/top-rated/1",
      text: "Top Rated",
    },
  ];

  useEffect(() => {
    fetchFilms({ url: "genre/movie/list" }, (data) => {
      setGenreButtons(
        data.genres.map((genre) => ({
          id: genre.id,
          section: genre.name.toLowerCase(),
          link: `/genre-${genre.name.toLowerCase()}/1`,
          text: genre.name,
        }))
      );
    });
  }, [fetchFilms]);

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

  return (
    <div
      className={`${classes["menu-container"]} ${
        props.isMobile && !mobileMenuOpen ? classes["small-screen"] : ""
      } ${mobileMenuOpen ? classes["slide-in"] : ""}`}
    >
      {props.isMobile && !mobileMenuOpen ? (
        <>
          <MenuSection className={"mt-4"}>
            <Button
              className="active centered-text no-animate"
              width="40px"
              height="40px"
              paddingLeft="0"
              backgroundColor={"var(--dark-blue"}
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
            <Button className="active" onClick={() => setMobileMenuOpen(false)}>
              close
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
            <IsolatedText
              className="mt-2 centered-text"
              color="var(--white)"
              fontWeight="500"
              fontSize="14px"
              checkForLoading={true}
            >
              {name}
            </IsolatedText>
          </MenuSection>
          <Divider width="130px" className="mt-2 centered" />
          <MenuSection>
            <IsolatedText
              className="mt-3 centered"
              width="130px"
              display="block"
              color="#fff"
              fontSize="12px"
            >
              Discover
            </IsolatedText>
            {discoverButtons.map((button) => (
              <Button
                key={button.section}
                className={getButtonClasses(
                  button.link,
                  "centered block mt-1 box-shadow"
                )}
                onClick={() => navigate(button.link)}
              >
                {button.text}
              </Button>
            ))}
          </MenuSection>
          <MenuSection>
            <IsolatedText
              className="mt-3 centered"
              width="130px"
              display="block"
              color="#fff"
              fontSize="12px"
            >
              Genres
            </IsolatedText>
            {genreButtons.map((button) => (
              <Button
                key={button.section}
                className={getButtonClasses(
                  button.link,
                  "centered block mt-1 box-shadow"
                )}
                onClick={() => navigate(button.link)}
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
  );
};

export default Menu;
