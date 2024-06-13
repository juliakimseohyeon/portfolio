import "./Project.scss";
import heroImg from "../../assets/images/const-julia-dark.png";
import arrowDown from "../../assets/icons/icon-arrow-down.svg";
import kongThumbnail from "../../assets/images/kong-thumbnail-dark.png";
import Carousel from "../../components/Carousel/Carousel";

export default function Project() {
  return (
    <main className="container">
      <section className="hero">
        <div className="hero__text">
          <h1>Hi, I'm Julia</h1>
          <h2>Scroll down for the good stuff</h2>
          <img src={arrowDown} />
        </div>
        <div className="hero__image">
          <div className="hero__text-group">
            <p className="hero__text">
              <span className="hero__text--dark">const</span> julia{" "}
              <span className="hero__text--dark">=</span> {`{`}
            </p>
            <p className="hero__indented-text">
              skills: ['HTML', 'CSS', 'Sass', 'React', 'JavaScript', 'Express',
              'and more'],
            </p>
            <p className="hero__indented-text">hardWorker: true,</p>
            <p className="hero__indented-text">isCreative: true,</p>
            <p className="hero__indented-text">likes: [ '🐱', '☕️', '✈️']</p>
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
