import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies() {
  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList />
    </div>
  );
}

export default Movies;
