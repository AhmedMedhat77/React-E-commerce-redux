import React from "react";

const Label = (props) => {
  return (
    <>
      {props.isEdit ? (
        <input onChange={props.onChange} value={props.value} />
      ) : (
        <div>{props.value}</div>
      )}
    </>
  );
};

export default Label;
