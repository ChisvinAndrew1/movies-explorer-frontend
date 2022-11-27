import React from "react";
import { Link } from "react-router-dom";
import Section from "../Section/Section";
import "./Portfolio.css";

function Portfolio() {
  return (
    <Section>
      <div className="portfolio portfolio__container">
        <h2 className="portfolio__subtitle section__subtitle">Портфолио</h2>
        <ul className="portfolio__links">
          <Link className="link portfolio__link" target="_blank" to="#">
            <p className="link__text">Статичный сайт</p>
            <span className="link__arrow">&#129125;</span>
          </Link>
          <Link className="link portfolio__link" target="_blank" to="#">
            <p className="link__text">Адаптивный сайт</p>
            <span className="link__arrow">&#129125;</span>
          </Link>
          <Link className="link portfolio__link" target="_blank" to="#">
            <p className="link__text">Одностраничное приложение</p>
            <span className="link__arrow">&#129125;</span>
          </Link>
        </ul>
      </div>
    </Section>
  );
}

export default Portfolio;
