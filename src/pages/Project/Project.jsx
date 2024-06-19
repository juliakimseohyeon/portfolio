import "./Project.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import heroImg from "../../assets/images/const-julia-dark.png";
import arrowDown from "../../assets/icons/icon-arrow-down.svg";
import kongThumbnail from "../../assets/images/kong-thumbnail-dark.png";
import Carousel from "../../components/Carousel/Carousel";
import Typewriter from "typewriter-effect";

export default function Project() {
  const [projects, setProjects] = useState([]);

  /* -------------------------------------------------------------------------- */
  /*                      Function to get all project data                      */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    const getAllProjects = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/projects`
        );
        console.log("Get all projects: ", response.data);
        setProjects(response.data);
      } catch (err) {
        console.error("Error getting projects: ", err);
      }
    };
    getAllProjects();
  }, []);

  return (
    <main className="container">
      <section className="hero">
        <div className="hero__text">
          <h1>Hi, I'm Julia</h1>
          <h2>Scroll down for the good stuff</h2>
          <img className="hero__icon" src={arrowDown} />
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
                    `<span style="padding-left: 1rem">likes: ['😻', '🍷', '🌿']</span>`
                  )
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(
                    `<span role="img" style="padding-left: 1rem">hobbies: ['🥾', '🧶', '🚣']</span>`
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
          <div className="projects__item">
            <img className="projects__item-thumbnail" src={kongThumbnail} />
            <h3>Kong</h3>
            <p>
              Get ready to fall in love with nature! Kong is a gamified plant
              identification app powered by OpenAI and StabilityAI which aims to
              foster a love for nature in a fun and artful way.
            </p>
            <div className="projects__item-tags">
              <p className="label">Full Stack</p>
              <p className="label">Full Stack</p>
              <p className="label">Full Stack</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
