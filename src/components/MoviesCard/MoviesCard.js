import React from 'react';
import './MoviesCard.css';
import movies_card from '../../images/movies-card.jpg';

function MoviesCard() {
    return (
        <article className='movies-card'>
            <img 
            className='movies-card__image'
            src={movies_card}
            alt='карточка фильма'
            />
            <h3 className='movies-card__title'>33 слова о дизайне</h3>
            <div className='movies-card__stroke movies-card__stroke_type_active'></div>
            <p className='movies-card__duration'>1ч 42м</p>
        </article>
    );
}

export default MoviesCard;