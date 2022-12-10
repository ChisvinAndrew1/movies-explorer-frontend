import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({checkboxStatus, handleShortFilms}) {
  console.log(checkboxStatus)
  return (
    <fieldset className="checkbox">
      <input
        type="checkbox"
        id="checkbox"
        className="checkbox__input"
        value={checkboxStatus}        // checked={checkboxStatus ? true : false}
        onChange={handleShortFilms}
      />
      {/* <span className="checkbox__circle"></span> */}
      <label className="checkbox__label">
        Короткометражки
      </label>
    </fieldset>
  );
}

export default FilterCheckbox;
