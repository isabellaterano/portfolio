import { useState } from "react";
import emailjs from "@emailjs/browser";
import useAlert from "../../hooks/useAlert";
import Alert from "./Alert";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Isabella",
          from_email: form.email,
          to_email: "isabellaiterano@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        //SHOW SUCCESS MESSAGE
        showAlert({
          show: true,
          text: "Message sent successfully!",
          type: "success",
        });
        //HIDE AN ALERT

        setTimeout(() => {
          hideAlert();
          setForm({ name: "", email: "", message: "" });
        });
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);

        //ERROR MESSAGE
        showAlert({
          show: true,
          text: "I didnt receive your message!",
          type: "danger",
        });
      });
  };

  return (
    <section className="contact" id="contact">
      {alert.show && <Alert {...alert} />}

      <motion.h2
        className="contact-title"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        {t("contact.title")}
      </motion.h2>

      <form className="contact__form" onSubmit={handleSubmit}>
        <label>{t("contact.name")}</label>
        <input
          type="text"
          name="name"
          className="input"
          placeholder={t("placeholder.name")}
          required
          value={form.name}
          onChange={handleChange}
        />
        <label>{t("contact.email")}</label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder={t("placeholder.email")}
          required
          value={form.email}
          onChange={handleChange}
        />
        <label>{t("contact.message")}</label>
        <textarea
          name="message"
          className="textarea"
          placeholder={t("placeholder.message")}
          required
          value={form.message}
          onChange={handleChange}
        />

        <button type="submit" className="contact-btn" disabled={isLoading}>
          {isLoading ? `${t("button.loading")}` : `${t("contact.button")}`}
        </button>
      </form>
    </section>
  );
};

export default Contact;
