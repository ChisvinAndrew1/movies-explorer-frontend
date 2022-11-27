import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer footer__container">
      <h2 className="footer__subtitle">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <p className="footer__year">© 2022</p>
      <Navigation />
    </footer>
  );
}

export default Footer;
