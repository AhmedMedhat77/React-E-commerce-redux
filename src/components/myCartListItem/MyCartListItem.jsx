import React from "react";
import { AiOutlineClose } from "react-icons/ai";
const MyCartListItem = (props) => {
  return (
    <div className="cardlist-item">
      <div className="cardlist-item__left">
        <img src={props.item.img} alt="" />
      </div>
      <div className="cardlist-item__right">
        <div className="cardlist-item__right__text">
          <h4>{props.item.name}</h4>
          <p>
            {props.item.count}
            <span> x </span> $ {props.item.price}
          </p>
        </div>

        <div className="cardlist-item__right__close">
          <AiOutlineClose  onClick={ ()=> props.onDelete(props.item) } />
        </div>
      </div>
    </div>
  );
};

export default React.memo( MyCartListItem);
