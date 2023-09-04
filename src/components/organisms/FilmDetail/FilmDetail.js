import React from "react";
import Image from "../../molecules/Image/Image";
import classes from "./FilmDetail.module.css";

const FilmDetail = () => {
  return (
    <div className={classes.detail}>
      <Image width={"200px"} height={"250px"} />
      <div>
        <h1>I am a film</h1>
        <p>I am a film's description</p>
      </div>
    </div>
  );
};

export default FilmDetail;
