import "./Project.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import IconArrowDown from "../../assets/icons/IconArrowDown";
import Carousel from "../../components/Carousel/Carousel";
import Typewriter from "typewriter-effect";
import Testimonials from "../../components/Testimonials/Testimonials";
import { projects } from "../../data/ProjectData";

export default function Project({ setSelectedProject }) {
  return (
    <main className="project-container">
      <section className="hero">
        <div className="hero__text">
          <h1>Hi, I'm Julia</h1>
          <h2>Scroll down for the good stuff</h2>
          <IconArrowDown className="hero__icon" />
        </div>
        <div className="hero__image">
          <div className="hero__circle-group">
            <div className="hero__circle"></div>
            <div className="hero__circle"></div>
            <div className="hero__circle"></div>
          </div>
          <div className="hero__text-group">
            <p className="hero__text">const julia = {`{`}</p>
            <p className="hero__indented-text">
              skills: ['HTML', 'CSS', 'Sass', 'React', 'JavaScript', 'Express',
              'and more'],
            </p>
            <p className="hero__indented-text">hardWorker: true,</p>
            <p className="hero__indented-text">isCreative: true,</p>
            <Typewriter
              options={{ loop: true, autoStart: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `<span style="padding-left: 1em">likes: ['<span className="hero__typewriter-icon" role="img" aria-label="cat-emoji">😻</span>', '<span className="hero__typewriter-icon" role="img" aria-label="leaf-emoji">🌿</span>']</span>`
                  )
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(
                    `<span style="padding-left: 1em">hobbies: ['<span className="hero__typewriter-icon" role="img" aria-label="boots-emoji">🥾</span>', '<span className="hero__typewriter-icon" role="img" aria-label="camping-emoji">🏕️</span>']</span>`
                  )
                  .pauseFor(1000)
                  .start();
              }}
            />
            <p className="hero__text">{`}`}</p>
          </div>
        </div>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <Carousel />
      </section>
      <section className="projects">
        <h2>Projects</h2>
        <div className="projects__gallery">
          {projects.map((project) => (
            <Link
              to={`/projects/${project.id}`}
              className="projects__item"
              key={project.id}
              onClick={() => setSelectedProject(project)}
            >
              <img className="projects__item-thumbnail" src={project.image} />
              <div className="projects__item-text-group">
                <h3>{project.project_name}</h3>
                <p className="projects__item-description">
                  {project.intro_text}
                </p>
                <div className="projects__item-tags">
                  {project.tags.map((tag, idx) => (
                    <p className="projects__item-label label" key={idx}>
                      {tag}
                    </p>
                  ))}
                </div>
                <button>Read about {project.project_name}</button>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Testimonials />
    </main>
  );
}
