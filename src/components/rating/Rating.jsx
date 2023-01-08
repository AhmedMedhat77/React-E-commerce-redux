import React from "react";
import { rate } from "../../helpers/rating";

const Rating = (props) => {
  return <div className="rating-stars">{rate(props.number)}</div>;
};

export default Rating;
