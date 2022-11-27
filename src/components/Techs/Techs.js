import React from "react";
import Section from "../Section/Section";
import "./Techs.css";

function Techs() {
  return (
    <Section>
      <div className="techs techs__container">
        <h2 className="techs__subtitle section__subtitle">Технологии</h2>
        <h1 className="techs__title section__title">7 технологий</h1>
        <p className="techs__main-text section__main-text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном&#160;проекте.
        </p>
        <ul className="techs__element-container">
          <li className="techs__element">HTML</li>
          <li className="techs__element">CSS</li>
          <li className="techs__element">JS</li>
          <li className="techs__element">React</li>
          <li className="techs__element">Git</li>
          <li className="techs__element">Express.js</li>
          <li className="techs__element">mongoDB</li>
        </ul>
      </div>
    </Section>
  );
}

export default Techs;
