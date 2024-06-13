import "./Toggle.scss";
import { useEffect, useState } from "react";
import { setTheme } from "../utils/themes";

export default function Toggle() {
  const [toggle, setToggle] = useState("dark");
  let theme = localStorage.getItem("theme");

  const handleOnClick = () => {
    if (theme === "theme-dark") {
      setTheme("theme-light");
      setToggle("light");
    } else {
      setTheme("theme-dark");
      setToggle("dark");
    }
  };
  return (
    <div className="toggle__container">
      <input
        type="checkbox"
        id="toggle"
        className="toggle__checkbox"
        onClick={handleOnClick}
      />
      <label htmlFor="toggle" className="toggle__label">
        <span className="toggle__label-background"></span>
      </label>
    </div>
  );
}
