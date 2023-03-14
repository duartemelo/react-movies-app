import React from "react";
import Input from "../../atoms/Input/Input";
import Nav from "../../molecules/Nav/Nav";
import ContentItem from "../ContentItem/ContentItem";
import ContentItems from "../ContentItems/ContentItems";
import classes from "./Content.module.css";
import image from "../../../assets/img/profile-image.jpg";

const Content = () => {
  return (
    <div className={`${classes["content-container"]} mt-4`}>
      <Nav>
        <Input placeholder="Search for a movie..."/>
      </Nav>
      <ContentItems>
        <ContentItem imageSource={image}/>
        <ContentItem imageSource={image}/>
        <ContentItem imageSource={image}/>
        <ContentItem imageSource={image}/>
        <ContentItem imageSource={image}/>
        <ContentItem imageSource={image}/>
        <ContentItem imageSource={image}/>
      </ContentItems>
    </div>
  )
}

export default Content;