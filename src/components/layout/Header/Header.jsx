import {
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaFileDownload,
} from "react-icons/fa";
import images from "../../../helpers/images";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header">
      <Navbar />

      <div className="header__info">
        <p className="header__welcome">Bienvenido !!</p>
        <h1 className="header__h1">
          Ana Manuela<span className="header__h1Span"> Ramirez</span>
        </h1>
        <h2 className="header__h2">Productora Audiovisual</h2>
        <p className="header__p">
          The keeper of the brightest and warmest moments
        </p>
        <a href="#" className="header__download">
          Descargar Cv
        </a>
        <figure className="header__figure">
          <img src={images.Me} alt="Me" className="header__img" />
        </figure>
      </div>

      <h2 className="header__name">
        Ana Manuela <span className="header__lastname">Ramirez</span>
      </h2>
      <h3 className="header__prof">Productora Audiovisual</h3>
      <figure className="header__imgContent">
        <img src={images.Me} alt="Me" className="header__img" />
      </figure>

      <div className="header__social">
        <a href="#" className="header__link">
          <FaYoutube className="header__iconSocial" />
        </a>
        <a href="#" className="header__link">
          <FaInstagram className="header__iconSocial" />
        </a>
        <a href="#" className="header__link">
          <FaLinkedinIn className="header__iconSocial" />
        </a>
      </div>
    </header>
  );
}

export default Header;
