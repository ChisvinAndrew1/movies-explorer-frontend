import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import "../SignForm/SignForm.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormWithValidation from "../../hooks/useFormWithValidation";

function Profile({ onLogOut, handleProfile }) {
  const { values, handleChange, resetForm, errors, isValid } =
    useFormWithValidation();
  const currentUser = React.useContext(CurrentUserContext);
  console.log(currentUser);
  const buttonValidity =
    !isValid ||
    (currentUser.name === values.name && currentUser.email === values.email);
  React.useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);
  function handleSubmit(e) {
    const { email, name } = values;
    e.preventDefault();
    handleProfile({ email, name });
  }
  return (
    <form
      onChange={handleChange}
      onSubmit={handleSubmit}
      className="profile__form"
    >
      <h2 className="profile__title">{`Привет, ${currentUser.name || ""}!`}</h2>
      <div className="profile__input-container">
        <label htmlFor="name" className="profile__label">
          Имя
        </label>
        <input
          name="name"
          type="text"
          placeholder="Имя"
          className={`profile__input ${
            errors.name ? "profile__input_type_error" : ""
          }`}
          minLength="2"
          maxLength="30"
          autoComplete="off"
          onChange={handleChange}
          value={values.name || ""}
          pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
          required
        />
        <span id="error" className="sign__error">
          {errors.name || ""}
        </span>
      </div>
      <div className="profile__input-container">
        <label htmlFor="email" className="profile__label">
          Email
        </label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className={`profile__input ${
            errors.email ? "profile__input_type_error" : ""
          }`}
          // value={value}
          minLength="2"
          maxLength="30"
          autoComplete="off"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
        <span id="error" className="sign__error">
          {errors.email || ""}
        </span>
      </div>

      <button
        disabled={buttonValidity ? true : false}
        className="profile__submit"
        type="submit"
      >
        Редактировать
      </button>
      <Link to="/signin" onClick={onLogOut} className="profile__link">
        Выйти из аккаунта
      </Link>
    </form>
  );
}

export default Profile;
