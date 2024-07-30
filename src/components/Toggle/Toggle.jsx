import "./Toggle.scss";

export default function Toggle({ toggle, theme, toggleTheme }) {
  return (
    <div className="toggle__container">
      <input
        type="checkbox"
        id="toggle"
        className="toggle__checkbox"
        onChange={toggleTheme}
        checked={toggle === "light"}
      />
      <label
        htmlFor="toggle"
        className={`toggle__label ${
          toggle === "dark" ? "toggle__label--dark" : "toggle__label--light"
        }`}
      ></label>
    </div>
  );
}
