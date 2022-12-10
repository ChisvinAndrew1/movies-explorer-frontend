import React, { useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Section from "../Section/Section";
import { useLocation } from "react-router-dom";
import { getSavedMovieCard } from "../../utils/filmController.js";
import useScreenWidthController from "../../hooks/useScreenWidthController";
import {DEVICE_SIZE_PARAMS} from "../../utils/constans"

function MoviesCardList({movieList,savedMoviesList, onLikeClick, onDeleteClick}) {
  const [cardsShow, setCardsShow] = useState({ total: 12, more: 3 });
  const [showMovieList, setShowMovieList] = useState([]);
  const screenWidth = useScreenWidthController();
  const location = useLocation();
  const [isMount, setIsMount] = useState(true);
  const { desktop, tablet, mobile } = DEVICE_SIZE_PARAMS;
  console.log(savedMoviesList)
  function handleClickMovies() {
    const start = showMovieList.length;
    const all = start + cardsShow.more;
    const difference = movieList.length - start;

    if (difference > 0) {
      const newCards = movieList.slice(start, all);
      setShowMovieList([...showMovieList, ...newCards]);
    }
  }
  // function save (movie) {
  //   console.log(movie)

    
  //   return 
  // };


  
  React.useEffect(() => {
    console.log(movieList)
    if (movieList.length) {
      console.log(movieList)
      const res = movieList.filter((item, i) => i < cardsShow.total);
      setShowMovieList(res);
    }
  }, [movieList, cardsShow.total]);

  React.useEffect(() => {
    if (location.pathname === '/movies') {
      if (screenWidth > desktop.width) {
        setCardsShow(desktop.cards);
      } else if (screenWidth <= desktop.width && screenWidth > mobile.width) {
        setCardsShow(tablet.cards);
      } else {
        setCardsShow(mobile.cards);
      }
      return () => setIsMount(false);
    }
  }, [screenWidth, isMount, desktop, tablet, mobile, location.pathname]);

  return (
    <Section>
      <div className="movies-card-container">
        
        <div className="movies-card-list">
        {showMovieList.map(movie => (
          <MoviesCard
            key={movie.id || movie._id}
            save={getSavedMovieCard(savedMoviesList, movie)}
            onLikeClick={onLikeClick}
            onDeleteClick={onDeleteClick}
            movie={movie}
          />
        ))}
        </div>

        {location.pathname === '/movies' && showMovieList.length >= 5 && showMovieList.length < movieList.length && (
        <button
          className="movies-card-list__still-btn"
          onClick={handleClickMovies}
        >
          Ещё
        </button>
      )}

        {/* <button className="movies-card-list__still-btn">Ещё</button> */}
      </div>
    </Section>
  );
}

export default MoviesCardList;
