import "./Project.scss";
import heroImg from "../../assets/images/const-julia-dark.png";
import arrowDown from "../../assets/icons/icon-arrow-down.svg";
import logoCss from "../../assets/logos/logo-css.svg";
import logoExpress from "../../assets/logos/logo-express.svg";
import logoFigma from "../../assets/logos/logo-figma.svg";
import logoHtml from "../../assets/logos/logo-html.svg";
import logoIllustrator from "../../assets/logos/logo-illustrator.svg";
import logoJavascript from "../../assets/logos/logo-javascript.svg";
import logoLinkedin from "../../assets/logos/logo-linkedin.svg";
import logoMysql from "../../assets/logos/logo-mysql.svg";
import logoNode from "../../assets/logos/logo-node.svg";
import logoOpenai from "../../assets/logos/logo-openai-icon.svg";
import logoPostman from "../../assets/logos/logo-postman.svg";
import logoReact from "../../assets/logos/logo-react.svg";
import logoSass from "../../assets/logos/logo-sass.svg";
import logoXd from "../../assets/logos/logo-xd.svg";
import kongThumbnail from "../../assets/images/kong-thumbnail-dark.png";

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
          <img src={heroImg} />
        </div>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <div className="skills__icon-group">
          <img className="skills__icon" src={logoCss} />
          <img className="skills__icon" src={logoExpress} />
          <img className="skills__icon" src={logoFigma} />
          <img className="skills__icon" src={logoHtml} />
          <img className="skills__icon" src={logoIllustrator} />
          <img className="skills__icon" src={logoJavascript} />
          <img className="skills__icon" src={logoLinkedin} />
          <img className="skills__icon" src={logoMysql} />
          <img className="skills__icon" src={logoNode} />
          <img className="skills__icon" src={logoOpenai} />
          <img className="skills__icon" src={logoPostman} />
          <img className="skills__icon" src={logoReact} />
          <img className="skills__icon" src={logoSass} />
          <img className="skills__icon" src={logoXd} />
        </div>
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
              <p>Full Stack</p>
              <p>Full Stack</p>
              <p>Full Stack</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
