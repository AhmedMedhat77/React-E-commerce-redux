import React from "react";

const Title = (props) => {
  return (
    <div className="main-title">
      <h2>{props.title}</h2>
      <p>{props?.description}</p>
    </div>
  );
};

export default React.memo(Title);
