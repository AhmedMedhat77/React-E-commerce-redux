import React from "react";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="container">
        <p>{props.text}</p>
      </div>
      <img src={props.img} alt={props.alt} />
    </footer>
  );
};

export default Footer;
