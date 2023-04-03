import React, { useState } from "react";
import ImageContainer from "../../atoms/ImageContainer/ImageContainer";
import TextContainer from "../../molecules/TextContainer/TextContainer";
import IsolatedText from "../../atoms/IsolatedText/IsolatedText";
import classes from "./ContentItem.module.css";
import RatingText from "../../atoms/RatingText/RatingText";
import RatingContainer from "../../molecules/RatingContainer/RatingContainer";
import Tooltip from "../../atoms/Tooltip/Tooltip";

const ContentItem = (props) => {
  const [toolTipStatus, setToolTipStatus] = useState(false);

  const ratingDivide = () => {
    let rating = props.rating;
    rating = Math.round(rating) / 2;
    return rating;
  };

  const handleRatingContainerMouseEnter = () => {
    setToolTipStatus(true);
  };

  const handleRatingContainerMouseLeave = () => {
    setToolTipStatus(false);
  };

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
        <RatingContainer
          rating={ratingDivide()}
          className="mt-05"
          onMouseEnter={handleRatingContainerMouseEnter}
          onMouseLeave={handleRatingContainerMouseLeave}
        />
      </TextContainer>

      <Tooltip
        text={`${props.rating} out of ${props.vote_count} votes`}
        style={{
          opacity: !toolTipStatus ? "0" : "1",
          transition: "all .2s",
          visibility: !toolTipStatus ? "hidden" : "visible",
        }}
      />
    </div>
  );
};

export default ContentItem;
