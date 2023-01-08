import React from "react";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import placeHolder from "../../assets/iphone.jpg";
const ProductImgGallery = (props) => {
  return (
    <div className="img-gallery">
      <div className="img-gallery__left">
        {/* it will receve array of images */}
        {/* {props?.imgs.map((img) => {
          return <img src={img} alt={props.name} key={img.id} />;
        })} */}
        <img className="img-gallery__left__item" src={placeHolder} alt="" />
        <img className="img-gallery__left__item" src={placeHolder} alt="" />
        <img className="img-gallery__left__item" src={placeHolder} alt="" />
        <img className="img-gallery__left__item" src={placeHolder} alt="" />
        <img className="img-gallery__left__item" src={placeHolder} alt="" />
      </div>
      <div className="img-gallery__right">
        <img className="img-gallery__right__item" src={placeHolder} alt="" />
        <div className="img-gallery__right__actions">
          <div className="img-gallery__right__actions__item">
            <AiOutlineShareAlt />
          </div>
          <div className="img-gallery__right__actions__item">
            <AiOutlineHeart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImgGallery;
