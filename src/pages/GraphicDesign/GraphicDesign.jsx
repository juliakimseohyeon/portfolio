import "./GraphicDesign.scss";
import axios from "axios";
import { graphicProjects } from "../../data/GraphicProjectData";

export default function GraphicDesign() {
  return (
    <main className="graphic__container">
      <section className="graphic__hero">
        <h1>My graphic projects B.C. (Before Coding)</h1>
      </section>
      <section className="graphic__gallery">
        {graphicProjects !== "[]" &&
          graphicProjects.map((project) => (
            <div className="graphic__item" key={project.id}>
              <div className="graphic__text-group">
                <h3>{project.project_name}</h3>
                <div className="graphic__tag-group">
                  {project.tags.map((tag, idx) => (
                    <p className="graphic__item-label label" key={idx}>
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
              <div className="graphic__image-group">
                {project.images.map((image, idx) => (
                  <img src={image} key={idx} className="graphic__image" />
                ))}
              </div>
            </div>
          ))}
      </section>
    </main>
  );
}
