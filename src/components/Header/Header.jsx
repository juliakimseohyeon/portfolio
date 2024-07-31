import "./Header.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Toggle from "../Toggle/Toggle";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import iconHamburger from "../../assets/icons/icon-hamburger.svg";
import LogoJuliaBlack from "../../assets/logos/logo-julia-black.svg";
import LogoJuliaWhite from "../../assets/logos/logo-julia-white.svg";

export default function Header({ toggle, theme, toggleTheme }) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280); // Tracks whether the window width is greater than 1280px

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1280);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize); // Resize event listener to update the isDesktop state based on the window width
    return () => {
      window.removeEventListener("resize", handleResize); // Cleans up the event listener when the component unmounts
    };
  }, []);

  return (
    <header>
      <nav>
        <Link to="/" className="nav--left">
          <img
            src={theme === "theme-dark" ? LogoJuliaWhite : LogoJuliaBlack}
            alt="Julia Logo"
            className="nav__logo-image"
          />
          <p className="nav__logo-text">Julia Kim</p>
        </Link>
        <div className="nav--right">
          <Toggle toggle={toggle} theme={theme} toggleTheme={toggleTheme} />

          {!isDesktop && !hamburgerOpen && (
            <div
              className="menu"
              onClick={() => {
                setHamburgerOpen(true);
              }}
            >
              <img src={iconHamburger} alt="Open menu" />
            </div>
          )}

          {(isDesktop || hamburgerOpen) && (
            <HamburgerMenu
              hamburgerOpen={hamburgerOpen}
              setHamburgerOpen={setHamburgerOpen}
            />
          )}
        </div>
      </nav>
    </header>
  );
}
