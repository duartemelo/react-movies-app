import React, { useEffect, useRef, useState } from "react";
import Image from "../../molecules/Image/Image";
import TextContainer from "../../atoms/TextContainer/TextContainer";
import IsolatedText from "../../atoms/IsolatedText/IsolatedText";
import classes from "./ContentItem.module.css";
import RatingContainer from "../../molecules/RatingContainer/RatingContainer";
import Tooltip from "../../atoms/Tooltip/Tooltip";
import PropTypes from "prop-types";

const ContentItem = (props) => {
  const myRef = useRef();
  const [toolTipStatus, setToolTipStatus] = useState(false);
  const [ratingContainerY, setRatingContainerY] = useState(0);

  const getPosition = () => {
    if (myRef.current) {
      const y = myRef.current.offsetTop;
      setRatingContainerY(y);
    }
  };

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", getPosition);
  }, []);

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
      <Image
        imageSrc={props.imageSource}
        alt="Content Image"
        borderRadius="5px"
        className="box-shadow pos-relative"
        width="200px"
        height="265px"
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
          ref={myRef}
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
          top: ratingContainerY - 32,
          fontWeight: 500,
        }}
      />
    </div>
  );
};

ContentItem.propTypes = {
  imageSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  vote_count: PropTypes.number.isRequired,
};

export default ContentItem;
