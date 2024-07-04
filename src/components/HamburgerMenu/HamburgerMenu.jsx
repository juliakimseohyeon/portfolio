import "./HamburgerMenu.scss";
import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { openInNewTab } from "../../utils/openNewTab";
import IconClose from "../../assets/icons/IconClose";
import IconLinkedin from "../../assets/icons/IconLinkedin";
import IconGithub from "../../assets/icons/IconGithub";
import IconEmail from "../../assets/icons/IconEmail";

export default function HamburgerMenu({ hamburgerOpen, setHamburgerOpen }) {
  return (
    <div className="hamburger">
      <IconClose
        className="hamburger__icon"
        onClick={() => {
          setHamburgerOpen(false);
        }}
      />
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive
            ? "hamburger__item hamburger__item--active"
            : "hamburger__item"
        }
        onClick={() => {
          setHamburgerOpen(false);
        }}
      >
        Projects
      </NavLink>
      <NavLink
        to="/graphic-projects"
        className={({ isActive }) =>
          isActive
            ? "hamburger__item hamburger__item--active"
            : "hamburger__item"
        }
        onClick={() => {
          setHamburgerOpen(false);
        }}
      >
        Graphic Projects
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "hamburger__item hamburger__item--active"
            : "hamburger__item"
        }
        onClick={() => {
          setHamburgerOpen(false);
        }}
      >
        About Me
      </NavLink>

      <div className="hamburger__contact-group">
        <IconGithub
          className="hamburger__contact-icon"
          onClick={() => openInNewTab("https://github.com/juliakimseohyeon")}
        />

        <IconLinkedin
          className="hamburger__contact-icon"
          onClick={() =>
            openInNewTab("https://www.linkedin.com/in/julia-kim-seo-hyeon")
          }
        />

        <IconEmail
          className="hamburger__contact-icon"
          onClick={() => openInNewTab("mailto: juliakimseohyeon@gmail.com")}
        />
      </div>
    </div>
  );
}
