import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <fieldset className="checkbox">
      <input type="checkbox" id="checkbox" className="checkbox__input"></input>
      <label htmlFor="checkbox" className="checkbox__label">
        Короткометражки
      </label>
    </fieldset>
  );
}

export default FilterCheckbox;
