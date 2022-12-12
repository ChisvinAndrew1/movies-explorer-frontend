import React, { useState } from "react";
import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import moviesApi from "../../utils/MoviesApi";
import {
  filterMovies,
  filterShortMovies,
  transformMovies,
} from "../../utils/filmController";
function Movies({ savedMoviesList, onLikeClick, onDeleteClick, setIsLoader }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [checkboxStatus, setCheckboxStatus] = useState(false);
  console.log(checkboxStatus);
  const [initialMovies, setInitialMovies] = useState([]); // фильмы полученные с запроса
  const [filteredMovies, setFilteredMovies] = useState([]); // отфильтрованные по чекбоксу и запросу фильмы
  const [NotFound, setNotFound] = useState(false); // если по запросу ничего не найдено - скроем фильмы
  const [isAllMovies, setIsAllMovies] = useState([]); // все фильмы от сервера, для единоразового обращения к нему
  // поиск по массиву и установка состояния
  function handleSetFilteredMovies(movies, userQuery, shortMoviesCheckbox) {
    const moviesList = filterMovies(movies, userQuery, shortMoviesCheckbox);
    console.log(moviesList);
    if (moviesList.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
    setInitialMovies(moviesList);
    setFilteredMovies(
      shortMoviesCheckbox ? filterShortMovies(moviesList) : moviesList
    );
    localStorage.setItem("movies", JSON.stringify(moviesList));
  }

  // поиск по запросу
  function handleSearchSubmit(inputValue) {
    localStorage.setItem("movieSearch", inputValue);
    localStorage.setItem("shortMovies", checkboxStatus);

    if (isAllMovies.length === 0) {
      setIsLoader(true);
      moviesApi
        .getMovies()
        .then((movies) => {
          setIsAllMovies(movies);
          handleSetFilteredMovies(
            transformMovies(movies),
            inputValue,
            checkboxStatus
          );
        })
        .catch()
        .finally(() => setIsLoader(false));
    } else {
      handleSetFilteredMovies(isAllMovies, inputValue, checkboxStatus);
    }
  }

  // состояние чекбокса
  function handleShortFilms() {
    setCheckboxStatus(!checkboxStatus);
    if (!checkboxStatus) {
      setFilteredMovies(filterShortMovies(initialMovies));
    } else {
      setFilteredMovies(initialMovies);
    }
    localStorage.setItem("shortMovies", !checkboxStatus);
  }

  // проверка чекбокса в локальном хранилище
  React.useEffect(() => {
    if (localStorage.getItem("shortMovies") === "true") {
      setCheckboxStatus(true);
    } else {
      setCheckboxStatus(false);
    }
  }, [currentUser]);

  // рендер фильмов из локального хранилища
  React.useEffect(() => {
    if (localStorage.getItem("movies")) {
      const movies = JSON.parse(localStorage.getItem("movies"));
      setInitialMovies(movies);
      if (localStorage.getItem("shortMovies") === "true") {
        setFilteredMovies(filterShortMovies(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, [currentUser]);
  return (
    <div className="movies">
      <SearchForm
        handleSearchSubmit={handleSearchSubmit}
        handleShortFilms={handleShortFilms}
        checkboxStatus={checkboxStatus}
      />
      {!NotFound ? (
        <MoviesCardList
          movieList={filteredMovies}
          savedMoviesList={savedMoviesList}
          onLikeClick={onLikeClick}
          onDeleteClick={onDeleteClick}
        />
      ) : (
        <div className="movies__container">
          <span className="movies__text">Ничего не найдено</span>
        </div>
      )}
    </div>
  );
}

export default Movies;
