import React from "react";
// import { Link, Route } from "react-router-dom";
import "./SignForm.css";

function SignForm({ title, children, textSubmit, childrenSign }) {
  return (
    <form className="sign__form">
      <h2 className="sign__title">{title}</h2>
      {children}
      <button className="sign__submit" type="submit">
        {textSubmit}
      </button>
      {childrenSign}
    </form>
  );
}

export default SignForm;
