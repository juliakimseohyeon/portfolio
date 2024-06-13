import "./HamburgerMenu.scss";
import iconClose from "../../assets/icons/icon-close.svg";

export default function HamburgerMenu({ hamburgerOpen, setHamburgerOpen }) {
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
    </div>
  );
}
