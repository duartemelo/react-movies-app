import React from "react";
import ImageContainer from "../../atoms/ImageContainer/ImageContainer";
import MenuSection from "../../molecules/MenuSection/MenuSection";
import classes from "./Menu.module.css";
import image from "../../../assets/img/profile-image.jpg";
import IsolatedText from "../../atoms/IsolatedText/IsolatedText";
import Divider from "../../atoms/Divider/Divider";
import Button from "../../atoms/Button/Button";

const Menu = () => {
  return (
    <div className={classes["menu-container"]}>
      <MenuSection className={"mt-4"}>
        <ImageContainer
          imageSrc={image}
          alt="Profile image"
          width="130px"
          borderRadius="5px"
          centered
          boxShadow
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
          className="centered block mt-1 box-shadow"
          backgroundColor="var(--white)"
          color="var(--blue)"
        >
          Trending
        </Button>
        <Button
          className="centered block mt-1 box-shadow"
          backgroundColor="var(--blue)"
          color="var(--white)"
        >
          Popular
        </Button>
      </MenuSection>
      <MenuSection style={{position: "absolute", bottom: "30px", width: "100%"}}>
        <Button className="centered block box-shadow" backgroundColor="var(--white)" color="var(--blue)">Logout</Button>
      </MenuSection>
    </div>
  );
};

export default Menu;
