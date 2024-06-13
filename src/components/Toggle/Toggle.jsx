import "./Toggle.scss";
import { useEffect, useState } from "react";
import { keepTheme, setTheme } from "../utils/themes";

export default function Toggle() {
  const [toggle, setToggle] = useState("dark");
  const theme = localStorage.getItem("theme");

  const handleOnClick = () => {
    if (theme === "theme-dark") {
      setTheme("theme-light");
      setToggle("light");
    } else {
      setTheme("theme-dark");
      setToggle("dark");
    }
  };

  // Function to ensure the local storage always loads the correct theme
  useEffect(() => {
    keepTheme();
    if (theme === "theme-dark") {
      setToggle("dark");
    } else {
      setToggle("light");
    }
  }, []);

  return (
    <div className="toggle__container">
      <input
        type="checkbox"
        id="toggle"
        className="toggle__checkbox"
        onClick={handleOnClick}
        checked={toggle === "light"}
      />
      <label
        htmlFor="toggle"
        className={`toggle__label ${
          toggle === "dark" ? "toggle__label--dark" : "toggle__label--light"
        }`}
      >
        <span className="toggle__label-background"></span>
      </label>
    </div>
  );
}
