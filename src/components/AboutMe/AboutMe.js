import React from "react";
import Section from "../Section/Section";
import avatar from "../../images/avatar.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <Section>
      <div className="about-me about-me__container">
        <h2 className="about-me__subtitle section__subtitle">Студент</h2>
        <h1 className="section__title about-me__title">Андрей</h1>
        <h3 className="about-me__dectription">Фронтенд-разработчик, 24 года</h3>
        <p className="about-me__main-text">
          Я родился и живу в Москве, закончил факультет юриспруденции АУП. У
          меня есть жена и сын. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. Интересно развиваться в этом направлении.
        </p>
        <ul className="about-me__link-container">
          <li className="about-me__link">Github</li>
          <li className="about-me__link">Vkontakte</li>
        </ul>
        <img
          alt="фотография профиля"
          src={avatar}
          className="about-me__avatar"
        />
      </div>
    </Section>
  );
}

export default AboutMe;
