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
        <a>Julia.Kim.SeoHyeon</a>
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
      </nav>
    </header>
  );
}
