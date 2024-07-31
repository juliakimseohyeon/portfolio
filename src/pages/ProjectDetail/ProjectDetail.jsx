import "./ProjectDetail.scss";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import IconGithub from "../../assets/icons/IconGithub";
import IconUrl from "../../assets/icons/IconUrl";
import { projects } from "../../data/ProjectData";
import { openInNewTab } from "../../utils/openNewTab";

export default function ProjectDetail({ selectedProject, setSelectedProject }) {
  const { id } = useParams();

  /* -------------------------------------------------------------------------- */
  /*         Function to load selected project details on initial mount         */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    setSelectedProject(projects[id]);
  });

  if (selectedProject) {
    console.log("Selected project: ", selectedProject);
    return (
      <div className="project-detail">
        <img className="project-image" src={selectedProject.image} />
        <div className="project-hero">
          <div className="project-hero__text">
            <h1 className="project-hero__title">
              {selectedProject.project_name}
            </h1>
            <div className="project-hero__link-group">
              {selectedProject.url && (
                <Link
                  className="project-hero__link"
                  onClick={() => openInNewTab(selectedProject.url)}
                >
                  <IconUrl />
                </Link>
              )}
              {selectedProject.github_frontend && (
                <Link
                  onClick={() => openInNewTab(selectedProject.github_frontend)}
                  className="project-hero__link"
                >
                  <IconGithub />
                </Link>
              )}
            </div>
          </div>
          <div className="project-hero__tag-group">
            {selectedProject.tags &&
              selectedProject.tags.map((tag, idx) => (
                <p key={idx} className="project-hero__tag label">
                  {tag}
                </p>
              ))}
          </div>
        </div>
        <div className="project-description-group">
          {selectedProject.description &&
            Object.entries(selectedProject.description).map(([key, value]) => (
              <div key={key} className="project-description">
                {Array.isArray(value) ? (
                  <>
                    <h2>{key}</h2>
                    <ul>
                      {value.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    {value.image && (
                      <img
                        src={value.image}
                        className="project-description-image"
                      />
                    )}
                    <h2>{value.subtitle}</h2> <p>{value.text}</p>
                  </>
                )}
              </div>
            ))}
        </div>
      </div>
    );
  }
}
