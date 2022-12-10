import React, { useContext, useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

import "./SavedMovies.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { filterMovies, filterShortMovies } from "../../utils/filmController";


function SavedMovies({ onDeleteClick, savedMoviesList }) {
  const currentUser = useContext(CurrentUserContext);
  const [checkboxStatus, setCheckboxStatus] = useState(false);
  const [NotFound, setNotFound] = useState(false); 
  const [showedMovies, setShowedMovies] = useState(savedMoviesList); 
  const [filteredMovies, setFilteredMovies] = useState(showedMovies); 


  function handleSearchSubmit(inputValue) {
    const moviesList = filterMovies(savedMoviesList, inputValue, checkboxStatus);
    if (moviesList.length === 0) {
      setNotFound(true);
      // setIsInfoTooltip({
      //   isOpen: true,
      //   successful: false,
      //   text: 'Ничего не найдено.',
      // });
    } else {
      setNotFound(false);
      setFilteredMovies(moviesList);
      setShowedMovies(moviesList);
    }
  }

  function handleShortFilms() {
    if (!checkboxStatus) {
      setCheckboxStatus(true);
      localStorage.setItem(`${currentUser.email} - shortSavedMovies`, true);
      setShowedMovies(filterShortMovies(filteredMovies));
      filterShortMovies(filteredMovies).length === 0 ? setNotFound(true) : setNotFound(false);
    } else {
      setCheckboxStatus(false);
      localStorage.setItem(`${currentUser.email} - shortSavedMovies`, false);
      filteredMovies.length === 0 ? setNotFound(true) : setNotFound(false);
      setShowedMovies(filteredMovies);
    }
  }


  React.useEffect(() => {
    if (localStorage.getItem(`${currentUser.email} - shortSavedMovies`) === 'true') {
      setCheckboxStatus(true);
      setShowedMovies(filterShortMovies(savedMoviesList));
    } else {
      setCheckboxStatus(false);
      setShowedMovies(savedMoviesList);
    }
  }, [savedMoviesList, currentUser]);

  React.useEffect(() => {
    setFilteredMovies(savedMoviesList);
    savedMoviesList.length !== 0 ? setNotFound(false) : setNotFound(true);
  }, [savedMoviesList]);

  return (
    <main className="saved-movies">
      <SearchForm
        handleSearchSubmit={handleSearchSubmit}
        handleShortFilms={handleShortFilms}
        checkboxStatus={checkboxStatus}
      />
      {!NotFound && (
        <MoviesCardList
          movieList={showedMovies}
          savedMoviesList={savedMoviesList}
          onDeleteClick={onDeleteClick}
        />
      )}
    </main>
  );
}


export default SavedMovies;
