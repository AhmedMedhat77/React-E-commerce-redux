import React from "react";

const MainBtn = (props) => {
  return (
    <button
      onClick={props.click}
      className={`btn ${props?.type} ${props?.size} ${props?.isRounded}`}
    >
      {props?.children}
      <span>
        {props?.name}
        {props.count ? <span>({props?.count})</span> : <></>}
      </span>
    </button>
  );
};

export default React.memo(MainBtn);
