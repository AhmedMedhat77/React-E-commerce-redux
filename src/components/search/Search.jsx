import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const Search = (props) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder={props?.placeHolder}
        className="search__input"
        onChange={props.onChange}
      />
      <AiOutlineSearch className={`search__button ${props.typo}`} />
    </div>
  );
};

export default React.memo(Search);
