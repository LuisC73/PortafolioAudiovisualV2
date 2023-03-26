import React, { useState } from "react";
import { FaAlignRight, FaTimes, FaMoon } from "react-icons/fa";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <nav className="header__nav">
      <p className="header__title">
        A<span className="header__span">M</span>
      </p>

      <ul className={`header__ul ${menuActive ? "header__ul--active" : ""}`}>
        <li className="header__close">
          <FaTimes
            className="header__closeIcon"
            onClick={() => setMenuActive(!menuActive)}
          />
        </li>
        <li className="header__li">
          <a href="#" className="header__a">
            Sobre mi
          </a>
        </li>
        <li className="header__li">
          <a href="#" className="header__a">
            Contacto
          </a>
        </li>
        <li className="header__li">
          <a href="#" className="header__a">
            Fotografias
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
        <FaAlignRight className="header__openIcon" />
      </button>
      <FaMoon className="header__decorate" />
    </nav>
  );
}

export default Navbar;
