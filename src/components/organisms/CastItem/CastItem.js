import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

import Image from "../../molecules/Image/Image";

import classes from "./CastItem.module.css";

const CastItem = (props) => {
  const navigate = useNavigate();
  const [nameVisibility, setNameVisibility] = useState(false);

  const nameList = props.personName.split(" ");

  const castItemClickHandler = () => {
    navigate(`/person/${props.personId}`);
  };

  return (
    <div
      className={`${props.className} ${classes["image-wrapper"]}`}
      onClick={castItemClickHandler}
      onMouseEnter={() => setNameVisibility(true)}
      onMouseLeave={() => setNameVisibility(false)}
    >
      {nameVisibility && (
        <div className={classes["name-wrapper"]}>
          {nameList.map((name) => (
            <span key={name} className={classes["name"]}>
              {name}
            </span>
          ))}
        </div>
      )}
      <Image
        key={props.personName}
        alt={props.personName}
        width="80px"
        height="120px"
        imageSrc={"https://image.tmdb.org/t/p/w342" + props.imagePath}
      />
    </div>
  );
};

CastItem.defaultProps = {
  className: "",
};

CastItem.propTypes = {
  personId: PropTypes.number.isRequired,
  personName: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default CastItem;
