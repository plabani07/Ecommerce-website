// DesktopNavbar.js
import React from "react";
import "./DesktopNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import companyLogo from "../../assets/icons/company-logo.png";
import topHeaderLogo from "../../assets/icons/nav-top-logo.png";

import searchLogo from "../../assets/icons/search-logo.png";
import heartLogo from "../../assets/icons/heart-logo.png";
import shoppingBagLogo from "../../assets/icons/shopping-bag-logo.png";
import profileLogo from "../../assets/icons/profile-logo.png";
import downArrow from "../../assets/icons/down-arrow-logo.png";

const DesktopNavbar = () => {
  return (
    <>
      <div id="header-top-section">
        <div className="header-top-item">
          <Image src={topHeaderLogo} alt="" />
          <p>Lorem ipsum dolor</p>
        </div>
        <div className="header-top-item">
          <Image src={topHeaderLogo} alt="" />
          <p>Lorem ipsum dolor</p>
        </div>
        <div className="header-top-item">
          <Image src={topHeaderLogo} alt="" />
          <p>Lorem ipsum dolor</p>
        </div>
      </div>

      <div className="navbar-box">
        <div className="company-logo">
          <Image src={companyLogo} />
        </div>
        <div className="company-title">
          <h1>LOGO</h1>
        </div>
        <div className="search-options">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            color="black"
            className="option-icons"
          />
          <FontAwesomeIcon
            icon={faHeart}
            color="black"
            className="option-icons"
          />
          <FontAwesomeIcon
            icon={faBagShopping}
            color="black"
            className="option-icons"
          />
          <FontAwesomeIcon
            icon={faUser}
            color="black"
            className="option-icons"
          />
          <select
            name="language-drop-down"
            id="language-drop-down"
            className="option-icons"
          >
            <option value="ENG">ENG</option>
            <option value="HIN">HIN</option>
          </select>
        </div>
      </div>
      <div className="navbar">
        <a href="#shop">SHOP</a>
        <a href="#skills">SKILLS</a>
        <a href="#stories">STORIES</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT US</a>
      </div>
    </>
  );
};

export default DesktopNavbar;
