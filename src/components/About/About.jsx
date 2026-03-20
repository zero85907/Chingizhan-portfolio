import React from "react";
import "./About.scss";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="about" id="about">
        <div className="container about__wrap">
          <h1 className="about__title">{t("about.title")}</h1>

          <div className="about__blocks">
            <div className="about__blocks-card">
              <h3 className="about__blocks-card-title">{t("about.meTitle")}</h3>
              <p className="about__blocks-card-text">{t("about.meText")}</p>
            </div>

            <div className="about__blocks-card">
              <h3 className="about__blocks-card-title">
                {t("about.frontendTitle")}
              </h3>
              <p className="about__blocks-card-text">
                {t("about.frontendText")}
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;
