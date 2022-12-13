import React from "react";
import { NavLink } from "react-router-dom";
import { IsLoggedInContext } from "../../contexts/isloggedInContext";
import "./NavTab.css";

function NavTab({ onBurgerMenu }) {
  const loggedIn = React.useContext(IsLoggedInContext);
  console.log(loggedIn);

  return (
    <>
      {!loggedIn ? (
        <nav className="nav-tab nav-tab__container">
          <NavLink to="/signup" className="nav-tab__link">
            Регистрация
          </NavLink>
          <NavLink
            to="/signin"
            className="nav-tab__link nav-tab__link_type_signin"
          >
            Войти
          </NavLink>
        </nav>
      ) : (
        <nav className="nav-tab nav-tab__container_type_movies">
          <NavLink
            to="/movies"
            className="nav-tab__link nav-tab__link_type_movies"
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className="nav-tab__link nav-tab__link_type_movies"
          >
            Сохраненные фильмы
          </NavLink>
          <NavLink
            to="/profile"
            className="nav-tab__link nav-tab__link_type_movies"
          >
            Аккаунт
            <span className="nav-tab__link-icon"></span>
          </NavLink>
          <span className="nav-tab__burger" onClick={onBurgerMenu}></span>
        </nav>
      )}
    </>
  );
}

export default NavTab;
