import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Modal from "../../ui/Modal";

const schema = Yup.object().shape({
  fullname: Yup.string().required(),
  email: Yup.string().email("Email Invalido").required(),
  message: Yup.string().min(3),
});

function ContactForm() {
  const submitForm = (values) => {
    console.log("Form enviado");
    handleReset();
    setModal(true);
  };

  const { handleSubmit, handleChange, handleReset, errors, values } = useFormik(
    {
      initialValues: {
        fullname: "",
        email: "",
        message: "",
      },
      onSubmit: submitForm,
      validationSchema: schema,
    }
  );

  const [modal, setModal] = useState(false);

  return (
    <form className="contactContent__form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        autoComplete="name"
        className={
          errors.fullname
            ? "contactContent__input contactContent__input--error"
            : "contactContent__input"
        }
        name="fullname"
        value={values.fullname}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Correo"
        autoComplete="email"
        className={
          errors.email
            ? "contactContent__input contactContent__input--error"
            : "contactContent__input"
        }
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <textarea
        cols="30"
        rows="10"
        placeholder="Mensaje"
        className={
          errors.message
            ? "contactContent__input contactContent__input--error"
            : "contactContent__input"
        }
        name="message"
        value={values.message}
        onChange={handleChange}
      ></textarea>
      <input type="submit" value="Enviar" className="contactContent__submit" />
      <Modal active={modal} setActive={setModal} />
    </form>
  );
}

export default ContactForm;
