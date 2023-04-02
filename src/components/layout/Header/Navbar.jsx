import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import images from "../../../helpers/images";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const showMenu = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", showMenu);

  return (
    <nav className={navbar ? "header__nav header__nav--active" : "header__nav"}>
      <ul className={`header__ul ${menuActive ? "header__ul--active" : ""}`}>
        <li className="header__close">
          <FaTimes
            className="header__closeIcon"
            onClick={() => setMenuActive(!menuActive)}
          />
        </li>
        <li className="header__li">
          <h2 className="header__title">Menu</h2>
        </li>
        <li className="header__li">
          <a href="#about" className="header__a" data-text="Sobre Mí">
            Sobre Mí
          </a>
        </li>
        <li className="header__li">
          <a href="#skills" className="header__a" data-text="Habilidades">
            Habilidades
          </a>
        </li>
        <li className="header__li">
          <a href="#contact" className="header__a" data-text="Contacto">
            Contacto
          </a>
        </li>
        <li className="header__li">
          <a href="#photos" className="header__a" data-text="Fotografías">
            Fotografías
          </a>
        </li>
        <li className="header__li">
          <a href="#videos" className="header__a" data-text="Videos">
            Videos
          </a>
        </li>
      </ul>
      <button
        className={
          navbar ? "header__button header__button--active" : "header__button"
        }
        onClick={() => setMenuActive(!menuActive)}
      >
        <HiMenuAlt3 className="header__openIcon" />
      </button>
    </nav>
  );
}

export default Navbar;
