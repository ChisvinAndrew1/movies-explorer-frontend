import React from "react";

function Input({ name, value, type, label, handleChange, error }) {
  return (
    <div className="sign__input-container">
      <label htmlFor={name} className="sign__label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className={`sign__input ${error && "sign__input_type_invalid"}`}
        value={value}
        minLength="2"
        maxLength="30"
        autoComplete="off"
        onChange={handleChange}
        required
      />
      <span id="error" className="sign__error">
        {error}
      </span>
    </div>
  );
}

export default Input;
