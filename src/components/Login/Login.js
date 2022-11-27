import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import SignForm from '../SignForm/SignForm';
import "../SignForm/SignForm.css";


function Login() {
    return (
        <SignForm 
        title="Рады видеть!"
        textSubmit="Войти"
        childrenSign={
          <p className="sign__text">
            Еще не зарегистрированы?
            <Link to="/signup" className="sign__link">
              Войти
            </Link>
          </p>
        }>
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

export default Login;