import "./ProjectDetail.scss";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import IconGithub from "../../assets/icons/IconGithub";
import IconUrl from "../../assets/icons/IconUrl";

export default function ProjectDetail() {
  const [selectedProject, setSelectedProject] = useState({});
  const { id } = useParams();

  /* -------------------------------------------------------------------------- */
  /*                   Function to get specific project detail                  */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    const getOneProject = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/projects/${id}`
        );
        setSelectedProject(response.data);
      } catch (err) {
        console.error("Error getting project detail: ", err);
      }
    };
    getOneProject();
  }, [id]);

  if (!selectedProject) {
    return <h1>Loading project details...</h1>;
  } else {
    console.log("Selected project: ", selectedProject);
    return (
      <div className="project-detail">
        <img
          className="project-image"
          src={`${import.meta.env.VITE_API_URL}${selectedProject.image}`}
        />
        <div className="project-hero">
          <div className="project-hero__text">
            <h1 className="project-hero__title">
              {selectedProject.project_name}
            </h1>
            <div className="project-hero__link-group">
              <Link to={selectedProject.url} className="project-hero__link">
                <IconUrl />
              </Link>
              <Link
                to={selectedProject.github_frontend}
                className="project-hero__link"
              >
                <IconGithub />
              </Link>
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
                <h2>{key}</h2>
                {Array.isArray(value) ? (
                  <ul>
                    {value.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{value}</p>
                )}
              </div>
            ))}
        </div>
      </div>
    );
  }
}
