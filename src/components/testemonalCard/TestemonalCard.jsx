import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const TestemonalCard = (props) => {
  return (
    <div className="testemonal-card">
      <blockquote className="testemonal-card__text">
        <p>{props?.text}</p>
      </blockquote>
      <div className="testemonal-card__rate">
        <AiOutlineStar className="icon" />
        <AiOutlineStar className="icon" />
        <AiOutlineStar className="icon" />
        <AiOutlineStar className="icon" />
      </div>
      <h5 className="testemonal-card__title">{props?.name}</h5>
      <p>{props?.job}</p>
    </div>
  );
};

export default TestemonalCard;
