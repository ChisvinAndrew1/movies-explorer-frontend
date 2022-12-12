import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ checkboxStatus, handleShortFilms }) {
  console.log(checkboxStatus);
  return (
    <fieldset className="checkbox">
      <input
        type="checkbox"
        id="checkbox"
        className="checkbox__input"
        checked={checkboxStatus}
        onChange={handleShortFilms}
      />
      <label className="checkbox__label">Короткометражки</label>
    </fieldset>
  );
}

export default FilterCheckbox;
