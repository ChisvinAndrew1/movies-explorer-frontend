import React from "react";
import "./InfoToolTip.css";

function InfoToolTip({ name, isOpen, onClose, info }) {
  return (
    <section
      className={`popup popup_type_${name} ${isOpen ? "popup_is-open" : ""}`}
    >
      <div className="popup__container popup__container_type_info">
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
        ></button>
        <img src={info.img} alt={info.message} className="info-img"></img>
        <h2 className="info-text">{info.message}</h2>
      </div>
    </section>
  );
}

export default InfoToolTip;
