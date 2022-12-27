import React from "react";
import MainBtn from "../button/index";
const Devider = (props) => {
  return (
    <div className="devider" style={{ backgroundImage: `url(${props.img})` }}>
      <div className="devider__left">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className="devider__right">
        <MainBtn
          name="SHOP NOW"
          type="btn btn--primary"
          size=" btn--l"
          isRounded="btn--rounded-m"
        />
      </div>
    </div>
  );
};

export default Devider;
