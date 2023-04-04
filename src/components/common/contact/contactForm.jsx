import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Modal from "../../ui/Modal";
import emailjs from "@emailjs/browser";

const schema = Yup.object().shape({
  fullname: Yup.string().required(),
  email: Yup.string().email("Email Invalido").required(),
  message: Yup.string().min(3),
});

function ContactForm() {
  const form = useRef();

  const submitForm = (e) => {
    e.preventDefault();

    console.log("hola");

    emailjs
      .sendForm(
        "service_g5vc15a",
        "template_abgr7fn",
        form.current,
        "DGMBQ8NGpO7MTNj5y"
      )
      .then(
        (result) => {
          console.log("Form enviado");
          handleReset();
          setModal(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g5vc15a",
        "template_abgr7fn",
        form.current,
        "DGMBQ8NGpO7MTNj5y"
      )
      .then(
        (result) => {
          handleReset();
          setModal(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const { handleSubmit, handleChange, handleReset, errors, values } = useFormik(
    {
      initialValues: {
        user_name: "",
        user_email: "",
        message: "",
      },
      onSubmit: submitForm,
      validationSchema: schema,
    }
  );

  const [modal, setModal] = useState(false);

  return (
    <form className="contactContent__form" onSubmit={sendEmail} ref={form}>
      <input
        type="text"
        placeholder="Nombre"
        autoComplete="name"
        className={
          errors.user_name
            ? "contactContent__input contactContent__input--error"
            : "contactContent__input"
        }
        name="user_name"
        value={values.user_name}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Correo"
        autoComplete="email"
        className={
          errors.user_email
            ? "contactContent__input contactContent__input--error"
            : "contactContent__input"
        }
        name="user_email"
        value={values.user_email}
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
