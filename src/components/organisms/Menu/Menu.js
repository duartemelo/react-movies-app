import React, { useEffect } from "react";
import ImageContainer from "../../atoms/ImageContainer/ImageContainer";
import MenuSection from "../../molecules/MenuSection/MenuSection";
import classes from "./Menu.module.css";
import image from "../../../assets/img/profile-image.jpg";
import IsolatedText from "../../atoms/IsolatedText/IsolatedText";
import Divider from "../../atoms/Divider/Divider";
import Button from "../../atoms/Button/Button";
import { useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  console.log(location.pathname);

  const getButtonClasses = (buttonText, classNames) => {
    if (location.pathname.replace("/", "") === buttonText.toLowerCase()) {
      return `${classNames} active`;
    } else {
      return classNames;
    }
  };

  return (
    <div className={classes["menu-container"]}>
      <MenuSection className={"mt-4"}>
        <ImageContainer
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
        <Button
          className={getButtonClasses(
            "Trending",
            "centered block mt-1 box-shadow"
          )}
          backgroundColor={
            getButtonClasses(
              "Trending",
              "centered block mt-1 box-shadow"
            ).includes("active")
              ? "var(--white)"
              : "var(--blue"
          }
          color={
            getButtonClasses(
              "Trending",
              "centered block mt-1 box-shadow"
            ).includes("active")
              ? "var(--blue)"
              : "var(--white"
          }
        >
          Trending
        </Button>
        <Button
          className={getButtonClasses(
            "Popular",
            "centered block mt-1 box-shadow"
          )}
          backgroundColor={
            getButtonClasses(
              "Popular",
              "centered block mt-1 box-shadow"
            ).includes("active")
              ? "var(--white)"
              : "var(--blue"
          }
          color={
            getButtonClasses(
              "Popular",
              "centered block mt-1 box-shadow"
            ).includes("active")
              ? "var(--blue)"
              : "var(--white"
          }
        >
          Popular
        </Button>
      </MenuSection>
      <MenuSection
        style={{ position: "absolute", bottom: "30px", width: "100%" }}
      >
        <Button
          className="centered block box-shadow"
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
