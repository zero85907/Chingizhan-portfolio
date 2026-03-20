import "./Header.scss";
import { useTranslation } from "react-i18next";
import { useThemeSlice } from "../../theme/themeSlice";
import { LogoB, LogoW } from "../../utils/img";
import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";


const Header = () => {
  const { i18n, t } = useTranslation();
  const [isDark, toggleTheme] = useThemeSlice();

  const changeLanguage = () => {
    const lang = i18n.language === "en" ? "ru" : "en";
    i18n.changeLanguage(lang);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container header__nav">
        <div className="header__logo">
          <a href="#">
            <img src={isDark ? LogoB : LogoW} alt="logo" />
          </a>
        </div>

        <ul className="header__menu">
          <li className="header__menu-item">
            <a href="#" className="header__menu-item__link">
              <span className="lang-text">{t("navigation.home")}</span>
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#about" className="header__menu-item__link">
              <span className="lang-text">{t("navigation.about")}</span>
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#skills" className="header__menu-item__link">
              <span className="lang-text">{t("navigation.skills")}</span>
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#services" className="header__menu-item__link">
              <span className="lang-text">{t("navigation.services")}</span>
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#projects" className="header__menu-item__link">
              <span className="lang-text">{t("navigation.projects")}</span>
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#contacts" className="header__menu-item__link">
              <span className="lang-text">{t("navigation.contacts")}</span>
            </a>
          </li>
        </ul>

        <div className="header__actions">
          <button className="header__actions-btn" onClick={changeLanguage}>
            {i18n.language}
          </button>

          <button
            className="header__actions-btn theme-btn"
            onClick={toggleTheme}
          >
            {isDark ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
