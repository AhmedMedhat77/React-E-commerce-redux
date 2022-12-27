import React from "react";

const MainBtn = (props) => {
  return (
    <button className={`btn ${props?.type} ${props?.size} ${props?.isRounded}`}>
      {props?.icon}
      <span>
        {props?.name}
        {props.count ? <span>({props?.count})</span> : <></>}
      </span>
    </button>
  );
};

export default MainBtn;
