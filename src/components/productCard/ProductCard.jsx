import React from "react";
import { AiFillStar, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { HiShoppingBag } from "react-icons/hi";
import { rate } from "../../helpers/rating";
const ProductCard = (props) => {
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="product-card__actions">
        <button className="icon icon--rounded-lg">
          <AiOutlineHeart
            onClick={() => {
              const newItem = { ...props };
              delete newItem.onWishListClick;
            }}
          />
        </button>
        <button className="icon icon--rounded-lg">
          <AiOutlineSearch />
        </button>
        <button
          className="icon icon--rounded-lg"
          onClick={() => {
            const newItem = { ...props };
            delete newItem.onCartClick;
            props.onCartClick(newItem);
          }}
        >
          <HiShoppingBag />
        </button>
      </div>
      <div className="product-card__body">
        <h4 className="product-card__body__title">{props?.name}</h4>
        <p>{props.author}</p>
      </div>
      <div className="product-card__footer">
        {props.rate ? rate(props?.rate) : <AiFillStar />}
        <p className="product-card__footer__price">${props?.price}</p>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
