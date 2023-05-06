import React, { useEffect, useState } from "react";
import Image from "../../atoms/Image/Image";
import MenuSection from "../../molecules/MenuSection/MenuSection";
import classes from "./Menu.module.css";
import image from "../../../assets/img/profile-image.jpg";
import IsolatedText from "../../atoms/IsolatedText/IsolatedText";
import Divider from "../../atoms/Divider/Divider";
import Button from "../../atoms/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import useHttp from "../../../hooks/use-http";

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [genreButtons, setGenreButtons] = useState([]);
  const { sendRequest: fetchFilms } = useHttp();

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
    if (
      location.pathname.split("/", 2).join("/") ===
      buttonLink.toLowerCase().split("/", 2).join("/")
    ) {
      return `${classNames} active no-animate`;
    } else {
      return classNames;
    }
  };

  return (
    <div className={classes["menu-container"]}>
      <MenuSection className={"mt-4"}>
        <Image
          imageSrc={image}
          alt="Profile image"
          width="130px"
          borderRadius="5px"
          centered
          className="centered box-shadow"
        />
        <IsolatedText
          className="mt-2 centered-text"
          color="var(--white)"
          fontWeight="500"
          fontSize="14px"
          centered
        >
          Duarte Melo
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
        >
          Logout
        </Button>
      </MenuSection>
    </div>
  );
};

export default Menu;
