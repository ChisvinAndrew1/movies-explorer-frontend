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
          <li className="portfolio__link">
            <Link
              className="link"
              target="_blank"
              to="https://github.com/ChisvinAndrew1/how-to-learn.git"
            >
              <p className="link__text">Статичный сайт</p>
              <span className="link__arrow"></span>
            </Link>
          </li>
          <li className="portfolio__link">
            <Link
              className="link"
              target="_blank"
              to="https://github.com/ChisvinAndrew1/russian-travel.git"
            >
              <p className="link__text">Адаптивный сайт</p>
              <span className="link__arrow"></span>
            </Link>
          </li>
          <li className="portfolio__link">
            <Link
              className="link"
              target="_blank"
              to="https://github.com/ChisvinAndrew1/react-mesto-api-full.git"
            >
              <p className="link__text">Одностраничное приложение</p>
              <span className="link__arrow"></span>
            </Link>
          </li>
        </ul>
      </div>
    </Section>
  );
}

export default Portfolio;
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
          <li className="portfolio__link">
            <Link
              className="link"
              target="_blank"
              to="https://github.com/ChisvinAndrew1/how-to-learn.git"
            >
              <p className="link__text">Статичный сайт</p>
              <span className="link__arrow"></span>
            </Link>
          </li>
          <li className="portfolio__link">
            <Link
              className="link"
              target="_blank"
              to="https://github.com/ChisvinAndrew1/russian-travel.git"
            >
              <p className="link__text">Адаптивный сайт</p>
              <span className="link__arrow"></span>
            </Link>
          </li>
          <li className="portfolio__link">
            <Link
              className="link"
              target="_blank"
              to="https://github.com/ChisvinAndrew1/react-mesto-api-full.git"
            >
              <p className="link__text">Одностраничное приложение</p>
              <span className="link__arrow"></span>
            </Link>
          </li>
        </ul>
      </div>
    </Section>
  );
}

export default Portfolio;
