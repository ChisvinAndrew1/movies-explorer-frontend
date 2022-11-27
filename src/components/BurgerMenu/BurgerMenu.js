import React from 'react';
import { NavLink } from 'react-router-dom';
import "./BurgerMenu.css"

function BurgerMenu({isOpen, onClose}) {
    return (
        <section className={`burger-menu ${isOpen ? "burger-menu_is-open" : ""}`}>
            <nav className='burger-menu__container'>
            <button
            type="button"
            className="burger-menu__close"
            onClick={onClose}
          ></button>
          <NavLink
                      onClick={onClose}

            to="/"
            className="burger-menu__link"
          >
            Главная
          </NavLink>
          <NavLink
                      onClick={onClose}

            to="/movies"
            className="burger-menu__link burger-menu__link_type_active burger-menu__link_type_active"
          > 
            Фильмы
          </NavLink>
          <NavLink
                      onClick={onClose}

            to="/saved-movies"
            className="burger-menu__link"
          >
            Сохраненные фильмы
          </NavLink>
          <NavLink
                      onClick={onClose}

            to="/profile"
            className="burger-menu__btn"
            id='burger-menu__btn'
            type='button'
          >
            Аккаунт 
          </NavLink>
            </nav>
        </section>
    );
}

export default BurgerMenu;