import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({shortMovies, handleShortFilms}) {
  return (
    <fieldset className="checkbox">
      <input
        type="checkbox"
        id="checkbox"
        className="checkbox__input"
        checked={shortMovies ? true : false}
        onChange={handleShortFilms}
      />
      <label htmlFor="checkbox" className="checkbox__label">
        Короткометражки
      </label>
    </fieldset>
  );
}

export default FilterCheckbox;
