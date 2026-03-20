import React, { useState } from "react";
import { MeIcon, MeIconAnime} from "../../utils/img";
import "./Hero.scss";
import { useTranslation } from "react-i18next";
import "../../i18n/en.json";
import "../../i18n/ru.json";

const Hero = () => {
  const { t } = useTranslation();
  const [isAnime, setIsAnime] = useState(false);
  const changePhoto = () => {
  setIsAnime(!isAnime);
};

  return (
    <>
      <section className="hero">
        <div className="container hero__wrapper">
          <div className="hero__logo">
            <img src={isAnime ? MeIconAnime : MeIcon} 
            alt="" 
            onClick={changePhoto}
            />
          </div>

          <div className="hero__content">
            <h1 className="hero__content-title">{t("hero.title")}</h1>
            <p className="hero__content-text">{t("hero.text")}</p>

            <div className="hero__btn">
              <a href="#contacts" className="hero__btn-icon">
                {t("hero.contact")}
              </a>
            </div>
          </div>

          
        </div>
      </section>
    </>
  );
};

export default Hero;
