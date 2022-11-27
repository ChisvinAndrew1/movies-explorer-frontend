import React from "react";
import "./TwoColumnus.css";

function TwoColumnus() {
  return (
    <article className="two-columnus">
      <div className="two-columnus__block">
        <h3 className="two-columnus__title">
          Дипломный проект включал 5 этапов
        </h3>
        <p className="section__main-text">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности&nbsp;и&nbsp;финальные доработки.
        </p>
      </div>
      <div className="two-columnus__block">
        <h3 className="two-columnus__title">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="section__main-text">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать,&nbsp;чтобы успешно защититься.
        </p>
      </div>
    </article>
  );
}

export default TwoColumnus;
