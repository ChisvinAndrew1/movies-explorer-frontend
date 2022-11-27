import React from "react";
import Section from "../Section/Section";
import TwoColumnus from "../TwoColumnus/TwoColumnus";
import "./AboutProject.css";

function AboutProject() {
  return (
    <Section>
      <div className="about-project about-project__container">
        <h2 className="about-project__subtitle section__subtitle">О проекте</h2>
        <TwoColumnus />
        <div className="about-project__chart-container">
          <p className="about-project__chart about-project__chart_type_one">
            1 неделя
          </p>
          <p className="about-project__chart about-project__chart_type_two">
            4 недели
          </p>
          <p className="about-project__chart about-project__chart_type_three">
            Back-end
          </p>
          <p className="about-project__chart about-project__chart_type_three">
            Front-end
          </p>
        </div>
      </div>
    </Section>
  );
}

export default AboutProject;
