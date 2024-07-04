import "./GraphicDesign.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function GraphicDesign() {
  const [graphicProjects, setGraphicProjects] = useState([]);
  /* -------------------------------------------------------------------------- */
  /*                  Function to get all graphic project data                  */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    const getAllGraphicProjects = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/graphic-projects`
        );
        console.log("Get all graphic projects: ", response.data);
        setGraphicProjects(response.data);
      } catch (err) {
        console.error("Error getting projects: ", err);
      }
    };
    getAllGraphicProjects();
  }, []);

  console.log("Current graphic projects: ", graphicProjects);
  return (
    <main className="graphic__container">
      <section className="graphic__hero">
        <h1>My projects B.C.</h1>
        <h2>(Before Coding)</h2>
      </section>
      <section className="graphic__gallery">
        {graphicProjects !== "[]" &&
          graphicProjects.map((project) => (
            <div className="graphic__item" key={project.id}>
              <div className="graphic__text-group">
                <h3>{project.project_name}</h3>
                {project.tags.map((tag, idx) => (
                  <p className="graphic__item-label label" key={idx}>
                    {tag}
                  </p>
                ))}
              </div>
              {project.images.map((image, idx) => (
                <img
                  src={`${import.meta.env.VITE_API_URL}${image}`}
                  key={idx}
                  className="graphic__image"
                />
              ))}
            </div>
          ))}
      </section>
    </main>
  );
}