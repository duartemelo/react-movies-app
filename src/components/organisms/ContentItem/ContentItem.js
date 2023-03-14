import React from "react";
import ImageContainer from "../../atoms/ImageContainer/ImageContainer";
import TextContainer from "../../molecules/TextContainer/TextContainer";
import IsolatedText from "../../atoms/IsolatedText/IsolatedText";
import classes from "./ContentItem.module.css";

const ContentItem = (props) => {
  return (
    <div className={`${classes["content-item"]} mt-3`}>
      <ImageContainer
        imageSrc={props.imageSource}
        alt="Content Image"
        borderRadius="5px"
        className="box-shadow pos-relative"
        width="200px"
        height="265px"
        zIndex="999"
      />
      <TextContainer>
        <IsolatedText className="centered-text mt-1" fontSize="12px" fontWeight="600">Spider-Man: No Way Home</IsolatedText>
      </TextContainer>
    </div>
  );
};

export default ContentItem;
