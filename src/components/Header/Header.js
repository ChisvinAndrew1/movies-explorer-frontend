import logo from "../../images/logo.svg";
import { Link, Route, useLocation } from "react-router-dom";
import "./Header.css";
import NavTab from "../NavTab/NavTab";

function Header({ onBurgerMenu }) {
  const location = useLocation();
  return (
    <header
      className={`header header__container header__container_theme_${
        location.pathname === "/" ? "bright" : "dark"
      }`}
    >
      <Route exact path="/">
        <Link to="/">
          <img src={logo} className="header__logo" alt="логотип" />
        </Link>
        <NavTab/>
      </Route>
      <Route path="/movies">
        <Link to="/">
          <img src={logo} className="header__logo" alt="логотип" />
        </Link>
        <NavTab onBurgerMenu={onBurgerMenu}/>
      </Route>
      <Route path="/saved-movies">
        <Link to="/">
          <img src={logo} className="header__logo" alt="логотип" />
        </Link>
        <NavTab onBurgerMenu={onBurgerMenu}/>
      </Route>
      <Route path="/profile">
        <Link to="/">
          <img src={logo} className="header__logo" alt="логотип" />
        </Link>
        <NavTab onBurgerMenu={onBurgerMenu}/>
      </Route>
      <Route path="/signup">
        <div className="header__container_type_small">
          <Link to="/">
            <img src={logo} className="header__logo" alt="логотип" />
          </Link>
        </div>
      </Route>
      <Route path="/signin">
        <div className="header__container_type_small">
          <Link to="/">
            <img src={logo} className="header__logo" alt="логотип" />
          </Link>
        </div>
      </Route>
    </header>

  );
}

export default Header;
