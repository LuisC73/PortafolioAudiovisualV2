import { FaYoutube, FaInstagram } from "react-icons/fa";
import images from "../../../helpers/images";
import Navbar from "./Navbar";
import ScrollBottom from "../../ui/ScrollBottom";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="header" id="inicio">
      <Navbar />
      <motion.img
        src={images.logo}
        alt="Logo"
        className="header__logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.8,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="header__info"
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: "1",
          delay: "0.4",
        }}
      >
        <motion.h1
          className="header__h1"
          initial={{ y: 10 }}
          animate={{ y: 0 }}
        >
          Ana Manuela<span className="header__h1Span"> Ramirez</span>
        </motion.h1>
        <h2 className="header__h2">Realizadora Audiovisual</h2>
        <p className="header__p">
          "Esto se trata de mantener la creatividad en supervivencia, si dejas
          de crear, dejas de creer y por lo tanto de crecer"
        </p>
        <a
          href="/CV Ana Manuela Ramirez C.pdf"
          className="header__download"
          aria-label="Descargar Cv"
          download
        >
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
            aria-label="Youtube"
          >
            <FaYoutube className="header__iconSocial header__iconSocial--youtube" />
          </a>
          <a
            href="https://www.instagram.com/ana_ramireez03/"
            className="header__link"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram className="header__iconSocial header__iconSocial--instagram" />
          </a>
        </div>
      </motion.div>

      <motion.figure
        className="header__imgContent"
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: "1",
          delay: "0.4",
        }}
      >
        <img src={images.Me} alt="Me" className="header__img" />
      </motion.figure>

      <ScrollBottom />
    </header>
  );
}

export default Header;
