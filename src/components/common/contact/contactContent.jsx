import images from "../../../helpers/images";

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
          <img
            src={images.Me}
            alt="Ana Manuela Ramirez"
            className="contactContent__face"
          />
        </figure>
        <form className="contactContent__form">
          <input
            type="text"
            placeholder="Nombre"
            autoComplete="name"
            className="contactContent__input"
          />
          <input
            type="email"
            placeholder="Correo"
            autoComplete="email"
            className="contactContent__input"
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Mensaje"
            className="contactContent__input"
          ></textarea>
          <input
            type="submit"
            value="Enviar"
            className="contactContent__submit"
          />
        </form>
      </div>
    </section>
  );
}

export default ContactContent;
