import { FiMail } from "react-icons/fi";
import { FaYoutube, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import images from "../../../helpers/images";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__col">
        <p className="footer__p">
          <FaPhoneAlt className="footer__icon" />{" "}
          <span className="footer__span">320 7925550</span>
        </p>
        <p className="footer__p">
          <FiMail className="footer__icon" />
          <span className="footer__span">amramirezcu@gmail.com</span>
        </p>
      </div>
      <div className="footer__col">
        <p className="footer__p footer__p--title">Redes sociales</p>
        <div className="footer__social">
          <a href="#" className="footer__a" aria-label="Youtube">
            <FaYoutube className="footer__icon" />
          </a>
          <a href="#">
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
