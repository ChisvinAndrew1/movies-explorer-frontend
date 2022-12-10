import React from "react";
import "../SignForm/SignForm.css";
import SignForm from "../SignForm/SignForm";
import Input from "../Input/Input";
import { Link } from "react-router-dom";
import useFormWithValidation from "../../hooks/useFormWithValidation";

function Register({ handleRegister }) {

  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(values);
  };

  // React.useEffect(() => {
  //   resetForm();
  // }, [resetForm]);

  return (
    <SignForm
      onSubmit={handleSubmit}
      
      // setInputs={setUserRegisterData}
      // inputsValue={userRegisterData}
      title="Добро пожаловать!"
      isValid={isValid}
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
        value={values.name || ''}
        label="Имя"
        handleChange={handleChange}
        error={errors.name}
      />
      <Input
        name="email"
        type="email"
        value={values.email || ''}
        label="E-mail"
        handleChange={handleChange}
        error={errors.email}
      />
      <Input
        name="password"
        type="password"
        value={values.password || ''}
        label="Пароль"
        handleChange={handleChange}
        error={errors.password}
      />
    </SignForm>
  );
}

export default Register;
