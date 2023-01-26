import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
const Search = (props) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder={props?.placeHolder}
        className="search__input"
        onChange={props.onChange}
      />
      {props.btnType === "search" ? (
        <AiOutlineSearch className={`search__button ${props.typo}`} />
      ) : (
        <FaTelegramPlane className={`search__button ${props.typo}`} />
      )}
    </div>
  );
};

export default React.memo(Search);
