import React from "react";
import Search from "../search/Search";

const NewsLetter = (props) => {
  return (
    <div className="news-letter">
      <div className="container">
        <div className="news-letter__text">
          <h6>{props.top}</h6>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <Search placeHolder="Your Email Adress"  type=""/>
      </div>
    </div>
  );
};

export default NewsLetter;
