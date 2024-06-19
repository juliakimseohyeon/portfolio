import "./AboutMe.scss";
import imgHero from "../../assets/images/about-me-main-background.jpg";
import imgHc from "../../assets/images/about-me-hc.jpg";
import imgSaddle from "../../assets/images/about-me-saddle-up.jpeg";
import imgCoffee from "../../assets/images/about-me-coffee.jpg";
import iconLinkedin from "../../assets/icons/icon-linkedin.svg";
import iconGithub from "../../assets/icons/icon-github.svg";
import iconEmail from "../../assets/icons/icon-email.svg";

export default function AboutMe() {
  return (
    <div className="container">
      <div className="about-hero">
        <h1>I'm always walking the extra mile</h1>
        <img
          className="about-image"
          src={imgHero}
          alt="photo of Julia at Panorama Ridge"
        />
        <div className="about-hero__icon-group">
          <div
            className="hamburger__contact"
            onClick={() => openInNewTab("https://github.com/juliakimseohyeon")}
          >
            <img src={iconGithub} alt="GitHub Icon" />
            <p className="hamburger__label label">GitHub</p>
          </div>
          <div
            className="hamburger__contact"
            onClick={() =>
              openInNewTab("https://www.linkedin.com/in/julia-kim-seo-hyeon")
            }
          >
            <img src={iconLinkedin} alt="LinkedIn Icon" />
            <p className="hamburger__label label">LinkedIn</p>
          </div>
          <div
            className="hamburger__contact"
            onClick={() => openInNewTab("mailto: juliakimseohyeon@gmail.com")}
          >
            <img src={iconEmail} alt="Email Icon" />
            <p className="hamburger__label label">Email</p>
          </div>
        </div>
      </div>

      <div className="about-text-group">
        <p>
          Having a graphic design and UX/UI background, I know that creating a
          pretty website isn't enough. A developer should see the bigger
          picture, including the business objectives and technical limitations,
          and passionately embrace findings based in user research.
        </p>
        <div className="about-text-chunk">
          <img
            className="about-image"
            src={imgHc}
            alt="Julia infront of Harbour Centre environmental graphic"
          />
          <h2>I'm used to wearing many hats</h2>
          <p>
            I transform from a designer that creates 8-foot-tall vinyl window
            graphics to a copywriter that captures readers' hearts with
            evocative words. It's all thanks to my passion for learning new
            skills and trends.
          </p>
        </div>
        <div className="about-text-chunk">
          <img
            className="about-image"
            src={imgSaddle}
            alt="Julia with a horse"
          />
          <h2>I'm ready to saddle up</h2>
          <p>
            If you can't find me at my computer, I'm either hiking, knitting,
            kayaking, strumming the ukulele, learning a new language, or
            travelling. I have been to 15 countries so far, and I would like to
            visit at least a 100 more. I love to learn new skills and push
            myself. My most recent adventure has been to earn the PADI
            Scuba-diving Certificate!
          </p>
        </div>
        <div className="about-text-chunk">
          <img
            className="about-image"
            src={imgCoffee}
            alt="Julia with a horse"
          />
          <h2>Let's grab coffee</h2>
          <p>
            Interested in hearing more about my projects? Want to hear some
            awesome dad jokes? Feel free to reach out to me by using any of the
            methods below!
          </p>
        </div>
      </div>
    </div>
  );
}
