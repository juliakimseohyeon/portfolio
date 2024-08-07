import "./AboutMe.scss";
import { openInNewTab } from "../../utils/openNewTab";
import imgHc from "../../assets/images/about-me-hc.jpg";
import imgDiving from "../../assets/images/about-me-diving.jpg";
import imgCoffee from "../../assets/images/about-me-coffee.jpg";
import IconLinkedin from "../../assets/icons/IconLinkedin";
import IconGithub from "../../assets/icons/IconGithub";
import IconEmail from "../../assets/icons/IconEmail";

export default function AboutMe() {
  return (
    <main className="about">
      <div className="about-parallax">
        <section className="about-hero">
          <h1 className="about-hero__layer hero-text">
            I'm always walking the extra mile
          </h1>
          <div className="about-hero__layer sky"></div>
          <div className="about-hero__layer mountains"></div>
          <div className="about-hero__layer me"></div>
        </section>
        <section className="about-text__group">
          <p className="about-text__text">
            Having a graphic design and UX/UI background, I know that creating a
            pretty website isn't enough. A developer should see the bigger
            picture, including the business objectives and technical
            limitations, and passionately embrace findings based in user
            research.
          </p>
          <div className="about-text__chunk">
            <img
              className="about-image"
              src={imgHc}
              alt="Julia infront of Harbour Centre environmental graphic"
            />
            <h2 className="about-text__title">I'm used to wearing many hats</h2>
            <p className="about-text__text">
              I transform from a designer that creates 8-foot-tall vinyl window
              graphics to a copywriter that captures readers' hearts with
              evocative words. It's all thanks to my passion for learning new
              skills and trends.
            </p>
          </div>
          <div className="about-text__chunk">
            <img
              className="about-image"
              src={imgDiving}
              alt="Julia scuba diving"
            />
            <h2 className="about-text__title">I'm ready to dive deep</h2>
            <p className="about-text__text">
              If you can't find me at my computer, I'm either hiking, knitting,
              kayaking, strumming the ukulele, learning a new language, or
              travelling. I have been to 21 countries so far, and I would like
              to visit at least a 100 more. I love to learn new skills and push
              myself. My most recent adventure has been to earn the PADI
              Scuba-diving Certificate!
            </p>
          </div>
          <div className="about-text__chunk">
            <img
              className="about-image"
              src={imgCoffee}
              alt="A coffee mug with the text 'What does the future hold? Arthritis'"
            />
            <h2 className="about-text__title">Let's grab coffee</h2>
            <p className="about-text__text">
              Interested in hearing more about my projects? Want to hear some
              awesome dad jokes? Feel free to reach out to me by using any of
              the methods below!
            </p>
          </div>
          <div className="about-text__icon-group">
            <IconGithub
              className="about-text__icon"
              onClick={() =>
                openInNewTab("https://github.com/juliakimseohyeon")
              }
            />

            <IconLinkedin
              className="about-text__icon"
              onClick={() =>
                openInNewTab("https://www.linkedin.com/in/julia-kim-seo-hyeon")
              }
            />

            <IconEmail
              className="about-text__icon"
              onClick={() => openInNewTab("mailto: juliakimseohyeon@gmail.com")}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
