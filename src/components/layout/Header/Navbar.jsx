import React, { useState } from "react";
import { FaTimes, FaMoon } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import images from "../../../helpers/images";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <nav className="header__nav">
      <img src={images.logo} alt="Logo" className="header__logo" />

      <ul className={`header__ul ${menuActive ? "header__ul--active" : ""}`}>
        <li className="header__close">
          <FaTimes
            className="header__closeIcon"
            onClick={() => setMenuActive(!menuActive)}
          />
        </li>
        <li className="header__li">
          <a href="#" className="header__a">
            Sobre Mí
          </a>
        </li>
        <li className="header__li">
          <a href="#" className="header__a">
            Contacto
          </a>
        </li>
        <li className="header__li">
          <a href="#" className="header__a">
            Fotografías
          </a>
        </li>
        <li className="header__li">
          <a href="#" className="header__a">
            Videos
          </a>
        </li>
      </ul>
      <button
        className="header__button"
        onClick={() => setMenuActive(!menuActive)}
      >
        <HiMenuAlt3 className="header__openIcon" />
      </button>
      <FaMoon className="header__decorate" />
    </nav>
  );
}

export default Navbar;
