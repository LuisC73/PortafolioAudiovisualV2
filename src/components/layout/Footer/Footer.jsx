import { FiMail } from "react-icons/fi";
import { FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";
import images from "../../../helpers/images";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__col">
        <a
          className="footer__link"
          href="https://wa.me/+573207925550"
          target="_blank"
        >
          <FaWhatsapp className="footer__icon" />
          <span className="footer__span">320 7925550</span>
        </a>
        <a className="footer__link" href="mailto:amramirezcu@gmail.com">
          <FiMail className="footer__icon" />
          <span className="footer__span">amramirezcu@gmail.com</span>
        </a>
      </div>
      <div className="footer__col">
        <p className="footer__p footer__p--title">Redes sociales</p>
        <div className="footer__social">
          <a
            href="https://www.youtube.com/@anamanuelaramirezcurequia1409"
            className="footer__a"
            aria-label="Youtube"
            target="_blank"
          >
            <FaYoutube className="footer__icon" />
          </a>
          <a
            href="https://www.instagram.com/ana_ramireez03/"
            className="footer__a"
            aria-label="Instagram"
            target="_blank"
          >
            <FaInstagram className="footer__icon" aria-label="Instagram" />
          </a>
        </div>
        <p className="footer__p footer__p--color">
          Copyright©2023 - Todos los derechos reservados
        </p>
      </div>
      <figure className="footer__col">
        <img src={images.logoBlack} alt="Logo" className="footer__img" />
      </figure>
    </footer>
  );
}

export default Footer;
