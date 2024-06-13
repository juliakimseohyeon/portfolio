import "./Header.scss";
import { useState } from "react";
import Toggle from "../Toggle/Toggle";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import iconHamburger from "../../assets/icons/icon-hamburger.svg";

export default function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="nav--left">
          <a className="nav__logo">Julia.Kim.SeoHyeon</a>
        </div>
        <div className="nav--right">
          <Toggle />
          <div
            className="menu"
            onClick={() => {
              setHamburgerOpen(true);
            }}
          >
            {!hamburgerOpen && <img src={iconHamburger} alt="Open menu" />}
          </div>
          {hamburgerOpen && (
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
