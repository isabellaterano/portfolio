import { useState } from "react";
import emailjs from "@emailjs/browser";
import useAlert from "../../hooks/useAlert";
import Alert from "./Alert";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
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
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
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
          to_email: "isabella@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: t("message.success"),
          type: "success",
        });

        setTimeout(() => {
          hideAlert();
          setForm({ name: "", email: "", message: "" });
        }, 3000);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);

        showAlert({
          show: true,
          text: t("message.failure"),
          type: "danger",
        });
      });
  };

  return (
    <section className="contact" id="contact">
      {alert.show && <Alert {...alert} />}

      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("contact.title")}
      </motion.h2>

      <form className="contact__form" onSubmit={handleSubmit}>
        <label htmlFor="name">{t("contact.name")}</label>
        <input
          id="name"
          type="text"
          name="name"
          className="input"
          placeholder={t("placeholder.name")}
          required
          value={form.name}
          onChange={handleChange}
        />
        <label htmlFor="email">{t("contact.email")}</label>
        <input
          id="email"
          type="email"
          name="email"
          className="input"
          placeholder={t("placeholder.email")}
          required
          value={form.email}
          onChange={handleChange}
        />
        <label htmlFor="message">{t("contact.message")}</label>
        <textarea
          id="message"
          name="message"
          className="textarea"
          placeholder={t("placeholder.message")}
          required
          value={form.message}
          onChange={handleChange}
        />
        <button type="submit" className="contact-btn" disabled={isLoading}>
          {isLoading ? t("button.loading") : t("contact.button")}
        </button>
      </form>

      <div className="contact-info">
        <div className="contact-info__item">
          <MdEmail className="contact-info__icon" />
          <a href="mailto:isabella@gmail.com" className="contact-info__text">
            isabella@gmail.com
          </a>
        </div>
        <div className="contact-info__socials">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="contact-info__icon" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="contact-info__icon" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="contact-info__icon" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="contact-info__icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
