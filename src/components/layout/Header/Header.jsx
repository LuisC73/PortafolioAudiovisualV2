import { FaYoutube, FaInstagram } from "react-icons/fa";
import images from "../../../helpers/images";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header">
      <Navbar />
      <img src={images.logo} alt="Logo" className="header__logo" />
      <div className="header__info">
        <h1 className="header__h1">
          Ana Manuela<span className="header__h1Span"> Ramirez</span>
        </h1>
        <h2 className="header__h2">Realizadora Audiovisual</h2>
        <p className="header__p">
          "Esto se trata de mantener la creatividad en supervivencia, si dejas
          de crear, dejas de creer y por lo tanto de crecer"
        </p>
        <a href="#" className="header__download">
          Descargar Cv
        </a>
        <figure className="header__figure">
          <img src={images.Me} alt="Me" className="header__img" />
        </figure>
        <div className="header__social">
          <a
            href="https://www.youtube.com/@anamanuelaramirezcurequia1409"
            className="header__link"
            target="_blank"
          >
            <FaYoutube className="header__iconSocial header__iconSocial--youtube" />
          </a>
          <a
            href="https://www.instagram.com/ana_ramireez03/"
            className="header__link"
            target="_blank"
          >
            <FaInstagram className="header__iconSocial header__iconSocial--instagram" />
          </a>
        </div>
      </div>

      <figure className="header__imgContent">
        <img src={images.Me} alt="Me" className="header__img" />
      </figure>
    </header>
  );
}

export default Header;
