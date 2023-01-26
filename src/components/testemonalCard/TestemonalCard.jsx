import React from "react";
import { AiFillStar } from "react-icons/ai";
import { rate } from "../../helpers/rating";

const TestemonalCard = (props) => {
  return (
    <div className="testemonal-card">
      <blockquote className="testemonal-card__text">
        <p>{props?.text}</p>
      </blockquote>
      <div className="testemonal-card__rate">
        {props.rate ? rate(props?.rate) : <AiFillStar />}
      </div>
      <h5 className="testemonal-card__title">{props?.name}</h5>
      <p>{props?.job}</p>
    </div>
  );
};

export default React.memo(TestemonalCard);
