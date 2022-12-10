import React from "react";
// import { Link, Route } from "react-router-dom";
import "./SignForm.css";

function SignForm({
  title,
  children,
  textSubmit,
  childrenSign,
  isValid,
  onSubmit,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="sign__form"
      autoComplete="off"
      noValidate
    >
      <h2 className="sign__title">{title}</h2>
      {children}
      <button disabled={!isValid} className="sign__submit" type="submit">
        {textSubmit}
      </button>
      {childrenSign}
    </form>
  );
}

export default SignForm;
