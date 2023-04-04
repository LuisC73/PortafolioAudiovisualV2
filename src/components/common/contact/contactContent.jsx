import images from "../../../helpers/images";
import ContactForm from "./contactForm";

function ContactContent() {
  return (
    <section className="contactContent" id="contact">
      <h3 className="contactContent__h3">
        Cont<span className="contactContent__span">acto</span>
      </h3>
      <div className="contactContent__wrapper">
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactContent;
