import React from "react";
import "../SignForm/SignForm.css";
import SignForm from "../SignForm/SignForm";
import Input from "../Input/Input";
import { Link } from "react-router-dom";

function Register() {
  return (
    <SignForm
      title="Добро пожаловать!"
      textSubmit="Зарегистрироваться"
      childrenSign={
        <p className="sign__text">
          Уже зарегистрированы?
          <Link to="/signin" className="sign__link">
            Войти
          </Link>
        </p>
      }
    >
      <Input
        name="name"
        type="text"
        // value={values.name}
        label="Имя"
      />
      <Input
        name="email"
        type="email"
        // value={values.name}
        label="E-mail"
      />
      <Input
        name="password"
        type="password"
        // value={values.name}
        label="Пароль"
      />
    </SignForm>
  );
}

export default Register;
