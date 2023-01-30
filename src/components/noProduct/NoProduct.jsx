import React from "react";
import { Link } from "react-router-dom";
import noProductImg from "../../assets/noProducts.svg";
const NoProduct = (props) => {
  return (
    <div className="no-product">
      <img src={noProductImg} alt="No Products in cart" />
      <p>No Products In The Cart</p>

      <Link to="/" className="btn btn--secondary btn--m btn--rounded-s">
        Return To Shop
      </Link>
    </div>
  );
};

export default NoProduct;
