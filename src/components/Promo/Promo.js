import React from "react";
import "./Promo.css";
import { Link } from "react-router-dom";
import promo__logo from "../../images/promo-logo.svg";
import Section from "../Section/Section";

function Promo() {
  return (
    <Section>
      <div className="promo promo__container">
        <h1 className="promo__title section__title">
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <p className="promo__text">
          Листайте ниже, чтобы узнать больше про&#160;этот проект и его
          создателя.
        </p>
        <Link to="/#" className="promo__link">
          Узнать больше
        </Link>
        <img src={promo__logo} className="promo__logo" alt="логотип глобус" />
      </div>
    </Section>
  );
}

export default Promo;
