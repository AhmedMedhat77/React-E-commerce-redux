import React from "react";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import placeHolder from "../../assets/iphone.jpg";
import placeHolder2 from "../../assets/dotsBanner.jpg";
import placeHolder3 from "../../assets/devider.png";
import placeHolder4 from "../../assets/floatIpone.jpg";

const data = [
  {
    imgList: [
      {
        name: "image",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, cumque.",
        src: placeHolder,
      },
      {
        name: "image",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, cumque.",
        src: placeHolder2,
      },
      {
        name: "image",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, cumque.",
        src: placeHolder3,
      },
      {
        name: "image",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, cumque.",
        src: placeHolder4,
      },
    ],
  },
  { viewImg: "" },
];
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
