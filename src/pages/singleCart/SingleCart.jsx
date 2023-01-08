import React from "react";
import ProductImgGallery from "../../components/productImgGallary/ProductImgGallery";
import Rating from "../../components/rating/Rating";

const SingleProductCard = () => {
  const SingleCartState = React.useState({
    Rating: "",
    productName: "",
    productDescription: "",
    productInfo: "",
    productImages: [],
    comments: [{ name: "", comment: "" }],
  });
  return (
    <>
      <div className="container">
        <ProductImgGallery />
      </div>
      <Rating number="3.4" />
    </>
  );
};

export default SingleProductCard;
