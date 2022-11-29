import React from "react";

function Input({ name, value, type, label }) {
  return (
    <div className="sign__input-container">
      <label htmlFor={name} className="sign__label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="sign__input"
        value={value}
        minLength="2"
        maxLength="30"
        autoComplete="off"
        //   value={values.name || ''}
        //   onChange={handlesChange}
        required
      />
      <span id="error" className="sign__error"></span>
    </div>
  );
}

export default Input;
