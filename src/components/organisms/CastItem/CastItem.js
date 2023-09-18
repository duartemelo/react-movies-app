import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import classes from "./CastItem.module.css";

import Tooltip from "../../atoms/Tooltip/Tooltip";

import Image from "../../molecules/Image/Image";

const CastItem = (props) => {
  const navigate = useNavigate();

  const castItemClickHandler = () => {
    navigate(`/person/${props.personId}`);
  };

  return (
    <Tooltip
      toolTipId={props.personId.toString()}
      toolTipText={props.personName}
    >
      <div className={classes["image-wrapper"]} onClick={castItemClickHandler}>
        <Image
          key={props.personName}
          alt={props.personName}
          width="60px"
          height="60px"
          borderRadius="9999px"
          imageSrc={"https://image.tmdb.org/t/p/w342" + props.imagePath}
        />
      </div>
    </Tooltip>
  );
};

CastItem.propTypes = {
  personId: PropTypes.number.isRequired,
  personName: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default CastItem;
