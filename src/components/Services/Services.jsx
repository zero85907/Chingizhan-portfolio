import React from "react";
import "./Services.scss";
import { useTranslation } from "react-i18next";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaLaptopCode,
} from "react-icons/fa";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <FaCode />,
      title: t("services.web"),
      text: t("services.webText"),
    },
    {
      icon: <FaLaptopCode />,
      title: t("services.frontend"),
      text: t("services.frontendText"),
    },
    {
      icon: <FaPaintBrush />,
      title: t("services.ui"),
      text: t("services.uiText"),
    },
    {
      icon: <FaMobileAlt />,
      title: t("services.adaptive"),
      text: t("services.adaptiveText"),
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="services__title">{t("services.title")}</h2>

        <div className="services__grid">
          {services.map((item, index) => (
            <div className="services__card" key={index}>
              <div className="services__card-icon">{item.icon}</div>

              <h3 className="services__card-title">{item.title}</h3>

              <p className="services__card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
