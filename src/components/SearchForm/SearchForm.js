import React, { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Section from "../Section/Section";
import iconSearch from "../../images/icon-search.svg";
import "./SearchForm.css";
import useFormWithValidation from '../../hooks/useFormWithValidation';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useLocation } from "react-router-dom";


function SearchForm({handleSearchSubmit, checkboxStatus , handleShortFilms}) {
  const currentUser = React.useContext(CurrentUserContext);

  const {
    values, handleChangeInput, isValid,
  } = useFormWithValidation();

  const location = useLocation();

  const [errorSearch, setErrorSearch] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    isValid ? handleSearchSubmit(values.search) : setErrorSearch('Нет совпадений.');
  };

  React.useEffect(() => {
    setErrorSearch('')
  }, [isValid]);

  React.useEffect(() => {
    if (location.pathname === '/movies' && localStorage.getItem(currentUser.email)) {
      const searchValue = localStorage.getItem(`${currentUser.email} - movieSearch`);
      values.search = searchValue;
      isValid(true);
    }
  }, [currentUser]);

  return (
    <Section>
      <form onSubmit={handleSubmit} noValidate className="search-form search-form__container">
        <fieldset className="search-form__search">
          <img className="search-form__img" alt="поиск" src={iconSearch} />
          <input
            value={values.search || ''}
            onChange={handleChangeInput}
            className="search-form__input"
            placeholder="Фильм"
            required
            autoComplete="off"
            minLength="2"
            name="search"
          />
          <span className="search__error">{errorSearch}</span>
          <button disabled={!isValid} className="search-form__submit" type="submit" />
        </fieldset>
        <FilterCheckbox shortMovies={checkboxStatus} handleShortFilms={handleShortFilms}/>
      </form>
    </Section>
  );
}

export default SearchForm;
