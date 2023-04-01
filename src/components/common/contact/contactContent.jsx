import images from "../../../helpers/images";
import ContactForm from "./contactForm";

function ContactContent() {
  return (
    <section className="contactContent">
      <h3 className="contactContent__h3">
        Cont<span className="contactContent__span">acto</span>
      </h3>
      <div className="contactContent__wrapper">
        <figure className="contactContent__figure">
          <img
            src={images.photoImg4}
            alt="Paisaje"
            className="contactContent__img"
          />
        </figure>
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactContent;
