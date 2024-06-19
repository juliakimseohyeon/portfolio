import "./HamburgerMenu.scss";
import iconClose from "../../assets/icons/icon-close.svg";
import iconLinkedin from "../../assets/icons/icon-linkedin.svg";
import iconGithub from "../../assets/icons/icon-github.svg";
import iconEmail from "../../assets/icons/icon-email.svg";

export default function HamburgerMenu({ hamburgerOpen, setHamburgerOpen }) {
  // Function to safely open URL in new tab
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="hamburger">
      <div
        className="hamburger__icon"
        onClick={() => {
          setHamburgerOpen(false);
        }}
      >
        <img src={iconClose} alt="Close menu" />
      </div>
      <a className="hamburger__item">Projects</a>
      <a className="hamburger__item">About Me</a>
      <div className="hamburger__contact-group">
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
  );
}
