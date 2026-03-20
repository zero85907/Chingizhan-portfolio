import React, { useEffect, useRef, useState } from "react";
import "./Skills.scss";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "HTML", icon: <FaHtml5 />, percent: 70 },
    { name: "CSS/SCSS", icon: <FaCss3Alt />, percent: 70 },
    { name: "JavaScript", icon: <FaJs />, percent: 60 },
    { name: "React", icon: <FaReact />, percent: 55 },
    { name: "Figma", icon: <FaFigma />, percent: 75 },
    { name: "GitHub", icon: <FaGithub />, percent: 70 },
  ];

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <div className="container">
        <h1 className="skills__title">{t("skills.title")}</h1>

        <div className="skills__grid">
          {skills.map((skill, index) => (
            <div className="skills__item" key={index}>
              <div className="skills__item-info">
                <div className="skills__item-info_left">
                  <div className="skills__item-info_left-icon">
                    {skill.icon}
                  </div>
                  <span className="skills__item-info_left-icon_name">
                    {skill.name}
                  </span>
                </div>

                <span className="skills__item-info_percent">
                  {visible ? `${skill.percent}%` : "0%"}
                </span>
              </div>

              <div className="skills__item-bar">
                <div
                  className="skills__item-bar_progress"
                  style={{
                    width: visible ? `${skill.percent}%` : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
