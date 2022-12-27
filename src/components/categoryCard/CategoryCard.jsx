import React from "react";

const CategoryCard = (props) => {
  return (
    <div className="category-card">
      <div className="category-card__img">
        <img src={props?.img} alt={props.name} />
        <div className="overlay">
            
        </div>
      </div>
      <div className="category-card__text">
        <h4 className="category-card__text__title">{props.name}</h4>
        <p className="category-card__text__count">{props.itemsCount}items</p>
      </div>
    </div>
  );
};

export default CategoryCard;
