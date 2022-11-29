import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Section from "../Section/Section";
import iconSearch from "../../images/icon-search.svg";
import "./SearchForm.css";

function SearchForm() {
  return (
    <Section>
      <form className="search-form search-form__container">
        <fieldset className="search-form__search">
          <img className="search-form__img" alt="поиск" src={iconSearch} />
          <input
            className="search-form__input"
            placeholder="Фильм"
            required
          ></input>
          <button className="search-form__submit" type="submit" />
        </fieldset>
        <FilterCheckbox />
      </form>
    </Section>
  );
}

export default SearchForm;
