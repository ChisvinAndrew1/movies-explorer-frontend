import React from "react";
import { Link } from "react-router-dom";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import Input from "../Input/Input";
import SignForm from "../SignForm/SignForm";
import "../SignForm/SignForm.css";

function Login({ onSubmit }) {
  const { values, handleChange, resetForm, errors, isValid } =
    useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    onSubmit(values);
  };

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <SignForm
      onSubmit={handleSubmit}
      title="Рады видеть!"
      textSubmit="Войти"
      isValid={isValid}
      childrenSign={
        <p className="sign__text">
          Еще не зарегистрированы?
          <Link to="/signup" className="sign__link">
            Регистрация
          </Link>
        </p>
      }
    >
      <Input
        name="email"
        type="email"
        value={values.email || ""}
        label="E-mail"
        handleChange={handleChange}
        error={errors.email}
      />
      <Input
        name="password"
        type="password"
        value={values.password || ""}
        label="Пароль"
        handleChange={handleChange}
        error={errors.password}
      />
    </SignForm>
  );
}

export default Login;
