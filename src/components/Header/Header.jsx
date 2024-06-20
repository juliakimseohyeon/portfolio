import "./Header.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Toggle from "../Toggle/Toggle";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import iconHamburger from "../../assets/icons/icon-hamburger.svg";

export default function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024); // Tracks whether the window width is greater than 1024px

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1024);
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
          <p className="nav__logo">Julia.Kim.SeoHyeon</p>
        </Link>
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
