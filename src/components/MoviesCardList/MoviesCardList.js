import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Section from "../Section/Section";

function MoviesCardList() {
  return (
    <Section>
      <div className="movies-card-container">
        <div className="movies-card-list">
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </div>
        <button className="movies-card-list__still-btn">Ещё</button>
      </div>
    </Section>
  );
}

export default MoviesCardList;
