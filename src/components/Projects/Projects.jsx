import React from "react";
import "./Projects.scss";
import { useTranslation } from "react-i18next";
import { AirPods, Food, Totembo } from "../../utils/img";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: "TOTEMBO",
      image: Totembo,
      look: "https://zero85907.github.io/TOTEMBO/",
      github: "https://github.com/zero85907/TOTEMBO",
    },
    {
      id: 2,
      title: "Food",
      image: Food,
      look: "https://zero85907.github.io/FOOD100/",
      github: "https://github.com/zero85907/FOOD100",
    },
    {
      id: 3,
      title: "AirPods Pro",
      image: AirPods,
      look: "https://zero85907.github.io/AirPods-Pro/",
      github: "https://github.com/zero85907/AirPods-Pro",
    },
  ];

  return (
    <>
      <section className="projects" id="projects">
        <div className="container">
          <h1 className="projects__title">{t("projects.title")}</h1>

          <div className="projects__grid">
            {projects.map((project) => (
              <div className="projects__grid-card" key={project.id}>
                <div className="projects__grid-card-img">
                  <img src={project.image} alt="" />
                </div>

                <h3 className="projects__grid-card-title">{project.title}</h3>

                <div className="projects__grid-btn">
                  <a
                    href={project.look}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__grid-btn-icon"
                  >
                    Look
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__grid-btn-icon"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
