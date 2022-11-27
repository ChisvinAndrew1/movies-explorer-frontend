import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import "./SavedMovies.css";

function SavedMovies() {
    return (
        <div className='saved-movies'>
            <SearchForm/>
            <MoviesCardList/>

            
        </div>
    );
}

export default SavedMovies;