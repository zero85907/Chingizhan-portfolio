import React from "react";
import "./Contact.scss";
import { FaTelegramPlane, FaGithub, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const contacts = [
    {
      id: 1,
      icon: <FaEnvelope />,
      link: "https://mail.google.com/mail/u/0/turgunalievcingiz85@gmail.com",
    },
    {
      id: 2,
      icon: <FaTelegramPlane />,
      link: "https://t.me/LukaMagic",
    },
    {
      id: 3,
      icon: <FaGithub />,
      link: "https://github.com/zero85907",
    },
  ];

  return (
    <>
      <section className="contact" id="contacts">
        <div className="container">
          <h1 className="contact__title">{t("contact.title")}</h1>

          <p className="contact__text">{t("contact.text")}</p>

          <div className="contact__block">
            {contacts.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__block-icon"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
