import React from "react";
import ImageContainer from "../../atoms/ImageContainer/ImageContainer";
import TextContainer from "../../molecules/TextContainer/TextContainer";
import IsolatedText from "../../atoms/IsolatedText/IsolatedText";
import classes from "./ContentItem.module.css";
import Rating from "../../atoms/Rating/RatingText";

const ContentItem = (props) => {
  const ratingDivide = () => {
    let rating = props.rating;
    rating = Math.round(rating)/2;
    return rating;
  }

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
        <IsolatedText
          className="centered-text mt-1"
          fontSize="12px"
          fontWeight="600"
          paddingLeft="15px"
          paddingRight="15px"
        >
          {props.title}
        </IsolatedText>
        {/*TODO: Make a rating container and deal with hover there, and pass styles to there */}
        <div style={{color: "#EBC500", marginLeft: 'auto', marginRight: 'auto', width: 'fit-content'}} className="mt-05"> 
          <Rating rating={ratingDivide()}/>
        </div>
      </TextContainer>
    </div>
  );
};

export default ContentItem;
