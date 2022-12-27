import React from "react";
import { AiFillStar, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { HiShoppingBag } from "react-icons/hi";
const ProductCard = (props) => {
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="product-card__actions">
        <button className="icon icon--rounded-lg">
          <AiOutlineHeart />
        </button>
        <button className="icon icon--rounded-lg">
          <AiOutlineSearch />
        </button>
        <button className="icon icon--rounded-lg">
          <HiShoppingBag />
        </button>
      </div>
      <div className="product-card__body">
        <h4 className="product-card__body__title">{props?.name}</h4>
        <p>{props.author}</p>
      </div>
      <div className="product-card__footer">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <p className="product-card__footer__price">${props?.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
