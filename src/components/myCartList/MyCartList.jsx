import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import MyCartListItem from "../myCartListItem/MyCartListItem";
import NoProduct from "../noProduct/NoProduct";

const MyCartList = (props) => {
  return (
    <div className={props.open ? "mycart-list active" : "mycart-list"}>
      {props.open ? (
        <div className="overlay active" />
      ) : (
        <div className="overlay" />
      )}
      <div className="mycart-list__top">
        <div className="mycart-list__top__title">
          <h3>{props.title}</h3>
          <AiOutlineClose onClick={props.onClose} />
        </div>
      </div>
      {!props.products || props.products.length === 0 ? (
        <NoProduct path={props.path} onClick={props.onClose} />
      ) : (
        <div className="mycart-list__center">
          {props?.products?.map((v) => {
            return (
              <MyCartListItem
                key={v.id}
                item={v}
                onDelete={props.onDeleteItem}
              />
            );
          })}
        </div>
      )}
      <div className="mycart-list__actions"></div>
      <div className="mycart-list__footer"></div>
    </div>
  );
};

export default React.memo(MyCartList);
