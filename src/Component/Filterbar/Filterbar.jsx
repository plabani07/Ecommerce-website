// Filterbar.js
import "./filterbar.css";
import React from "react";
import Image from "next/image";

import leftArrow from "../../assets/icons/left-arrow-logo.png";
import rightArrow from "../../assets/icons/right-arrow-logo.png";

const Filterbar = ({ toggleDropdown, isDropdownOpen }) => {
  const sortingOptions = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE: HIGH TO LOW",
    "PRICE: LOW TO HIGH",
  ];

  return (
    <>
      <hr className="padded-hr" />
      <div className="filterbarContainer">
        <div className="filterInfo">
          <p>3425 ITEMS</p>
          <button className="dropdown-button" onClick={toggleDropdown}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {isDropdownOpen ? (
                <>
                  <Image src={leftArrow} alt="left-awrrow" />
                  <span className="hide-show">HIDE FILTER</span>
                </>
              ) : (
                <>
                  <Image src={rightArrow} alt="rightt-awrrow" />
                  <span className="hide-show">SHOW FILTER</span>{" "}
                </>
              )}
            </div>
          </button>
        </div>
        <div className="smallScreenFilter">
          <p>FILTER</p>
        </div>
        <div className="vertical-Line"></div>
        <div className="only-mobile">
          <div className="custom-select-wrapper">
            <select name="sort" id="sortDropDown" className="custom-select">
              {sortingOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="custom-arrow"></div>
          </div>
        </div>
      </div>
      <hr className="padded-hr" />
    </>
  );
};

export default Filterbar;
