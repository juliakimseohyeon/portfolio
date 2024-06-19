import "./Header.scss";
import { useState, useEffect } from "react";
import Toggle from "../Toggle/Toggle";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import iconHamburger from "../../assets/icons/icon-hamburger.svg";

export default function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1280); // Tracks whether the window width is greater than 1280px

  const handleResize = () => {
    setIsDesktop(window.innerWidth > 1280);
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
        <div className="nav--left">
          <a className="nav__logo">Julia.Kim.SeoHyeon</a>
        </div>
        <div className="nav--right">
          <Toggle />

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
