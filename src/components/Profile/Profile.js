import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import "../SignForm/SignForm.css";

function Profile() {
  return (
    <form className="profile__form">
      <h2 className="profile__title">Привет, Андрей!</h2>
      <div className="profile__input-container">
        <label htmlFor="name" className="profile__label">
          Имя
        </label>
        <input
          name="name"
          type="text"
          placeholder="Имя"
          className="profile__input"
          // value={value}
          minLength="2"
          maxLength="30"
          autoComplete="off"
          //   value={values.name || ''}
          //   onChange={handlesChange}
          required
        />
        <span id="error" className="sign__error"></span>
      </div>
      <div className="profile__input-container">
        <label htmlFor="email" className="profile__label">
          Email
        </label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="profile__input"
          // value={value}
          minLength="2"
          maxLength="30"
          autoComplete="off"
          //   value={values.name || ''}
          //   onChange={handlesChange}
          required
        />
        <span id="error" className="sign__error"></span>
      </div>

      <button className="profile__submit" type="submit">
        Редактировать
      </button>
      <Link to="/signin" className="profile__link">
        Выйти из аккаунта
      </Link>
    </form>
  );
}

export default Profile;
