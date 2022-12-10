import React, { useState } from "react";
import "./MoviesCard.css";
// import movies_card from "../../images/movies-card.jpg";
import { useLocation } from "react-router-dom";
import { transformDuration } from "../../utils/filmController";

function MoviesCard({ movie, save, onLikeClick, onDeleteClick }) {


  const location = useLocation();
  console.log(save)
  console.log(movie)
  const [isShown, setIsShown] = useState(false);

  // function getSavedMovieCard(arr, movie) {
  //   console.log(arr)
  //   console.log(movie)
  
  //   return arr.find((item) => {
  //     console.log(item.movieId)
  //     return item.movieId === (movie.id || movie.movieId);
  //   });
  // }

// function saveFilm() {
//   return getSavedMovieCard(save, movie);
// }

  function handleLikeClick() {
    onLikeClick(movie);

  }

  function handleDeleteClick() {
    onDeleteClick(movie);
  }

  return (
    <article
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      className="movies-card"
    >
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img
          className="movies-card__image"
          src={movie.image}
          alt="карточка фильма"
        />
      </a>
      <h3 className="movies-card__title">{movie.nameRU}</h3>
      {location.pathname === "/movies" && (
        <button
          className={`movies-card__stroke ${save ? "movies-card__stroke_type_active" : ''
          }`}
          onClick={save ? handleDeleteClick : handleLikeClick}
          aria-label={`${
            save ? 'Удалить фильм из сохранённых' : 'Сохранить фильм'
          }`}
        ></button>
      )}
      {location.pathname === "/saved-movies" && (
            isShown ? 
              <button
                type="button"
                className="movies-card__delete"
                onClick={handleDeleteClick}
              ></button>
             : ''
          )}
      <p className="movies-card__duration">
        {transformDuration(movie.duration)}
      </p>
    </article>
  );
}

export default MoviesCard;
