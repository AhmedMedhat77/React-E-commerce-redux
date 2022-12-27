import React from "react";
import Search from "../../components/search/Search";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__text">
          <h1 className="hero__text__title">
            <label>
              over <span>6,500</span> Curated Design
            </label>
            <label>
              Resources,<span>Graphic & Website</span> Templates
            </label>
          </h1>
          <p className="hero__text__description">
            High-quality Design Themes for personal or commercial use contains
            6k+ items in 100 categories.
          </p>
        </div>
        <div className="hero__actions">
          <select>
            <option value="phone">Phone</option>
            <option value="Tablet">Tablet</option>
            <option value="PC">Pc</option>
            <option value="Furneture">Furneture</option>
          </select>
          <Search placeHolder="Search Products..." typo="typo--xl" />
        </div>
        <p className="hero__text">
          <span>Examples:</span> Mockup, PSD, Theme Design, Image…
        </p>
      </div>
    </div>
  );
};

export default Hero;
