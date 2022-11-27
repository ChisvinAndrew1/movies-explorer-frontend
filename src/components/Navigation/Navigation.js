import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav">
      <NavLink to="#" className="nav__link" target="_blank">
        Яндекс.Практикум
      </NavLink>
      <NavLink to="#" className="nav__link">
        Github
      </NavLink>
      <NavLink to="#" className="nav__link">
        Facebook
      </NavLink>
    </nav>
  );
}

export default Navigation;
