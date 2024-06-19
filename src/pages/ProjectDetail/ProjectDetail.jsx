import "./ProjectDetail.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
      <div className="container">
        <div>
          <img
            src={`${import.meta.env.VITE_API_URL}${selectedProject.image}`}
          />
          <div className="project-hero">
            <div className="project-hero__links">
              <h1>{selectedProject.project_name}</h1>
              <p>{selectedProject.url}</p>
              <p>{selectedProject.github_frontend}</p>
            </div>
            <div className="project-hero__tags">
              {selectedProject.tags &&
                selectedProject.tags.map((tag, idx) => <p key={idx}>tag</p>)}
            </div>
          </div>
          <div className="project-description">
            {selectedProject.description &&
              Object.entries(selectedProject.description).map(
                ([key, value]) => (
                  <div key={key}>
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
                )
              )}
          </div>
        </div>
      </div>
    );
  }
}
