import React, { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Section from "../Section/Section";
import iconSearch from "../../images/icon-search.svg";
import "./SearchForm.css";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useLocation } from "react-router-dom";

function SearchForm({ handleSearchSubmit, handleShortFilms, checkboxStatus }) {
  const currentUser = React.useContext(CurrentUserContext);

  const { values, handleChange, isValid, setIsValid } = useFormWithValidation();

  const location = useLocation();

  const [errorSearch, setErrorSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    isValid
      ? handleSearchSubmit(values.search)
      : setErrorSearch("Нет совпадений.");
  }

  React.useEffect(() => {
    setErrorSearch("");
  }, [isValid]);

  React.useEffect(() => {
    if (
      location.pathname === "/movies" &&
      localStorage.getItem(`${currentUser.email} - movieSearch`)
    ) {
      const searchValue = localStorage.getItem(
        `${currentUser.email} - movieSearch`
      );
      values.search = searchValue;
      setIsValid(true);
    }
  }, [currentUser]);

  return (
    <Section>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="search-form search-form__container"
      >
        <fieldset className="search-form__search">
          <img className="search-form__img" alt="поиск" src={iconSearch} />
          <input
            name="search"
            value={values.search || ""}
            onChange={handleChange}
            className="search-form__input"
            placeholder="Фильм"
            required
            autoComplete="off"
            minLength="2"
          />
          <span className="search__error">{errorSearch}</span>
          <button
            disabled={!isValid}
            className="search-form__submit"
            type="submit"
          />
        </fieldset>
        <FilterCheckbox
          checkboxStatus={checkboxStatus}
          handleShortFilms={handleShortFilms}
        />
      </form>
    </Section>
  );
}

export default SearchForm;
