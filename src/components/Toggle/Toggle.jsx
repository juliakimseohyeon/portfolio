import "./Toggle.scss";
import { useEffect, useState } from "react";

export default function Toggle() {
  return (
    <div className="toggle__container">
      <input type="checkbox" id="toggle" className="toggle__checkbox" />
      <label htmlFor="toggle" className="toggle__label">
        <span className="toggle__label-background"></span>
      </label>
    </div>
  );
}
