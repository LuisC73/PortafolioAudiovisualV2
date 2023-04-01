import { useFormik } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  fullname: Yup.string().required(),
  email: Yup.string().email("Email Invalido").required(),
  message: Yup.string().min(3),
});

function ContactForm() {
  const submitForm = (values) => {
    console.log("Form enviado");
    handleReset();
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

  return (
    <form className="contactContent__form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        autoComplete="name"
        className="contactContent__input"
        name="fullname"
        value={values.fullname}
        onChange={handleChange}
      />
      {errors.email && (
        <label className="contactContent__error" htmlFor="email">
          Email Invalido
        </label>
      )}
      <input
        type="email"
        placeholder="Correo"
        autoComplete="email"
        className="contactContent__input"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <textarea
        cols="30"
        rows="10"
        placeholder="Mensaje"
        className="contactContent__input"
        name="message"
        value={values.message}
        onChange={handleChange}
      ></textarea>
      <input type="submit" value="Enviar" className="contactContent__submit" />
    </form>
  );
}

export default ContactForm;
