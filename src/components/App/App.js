import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { Route, Switch } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound ";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(true);
  function handleBurgerMenuClick() {
    setIsBurgerMenuOpen(true);
  }
  function closeBurgerMenu() {
    setIsBurgerMenuOpen(false);
  }
  return (
    <div className="App">
      <div className="app__page">
        <Switch>
          <Route exact path="/">
            <Header />
            <Main />
            <Footer />
          </Route>
          <Route path="/movies">
            <Header onBurgerMenu={handleBurgerMenuClick} />
            <BurgerMenu isOpen={isBurgerMenuOpen} onClose={closeBurgerMenu} />
            <Movies />
            <Footer />
          </Route>
          <Route path="/saved-movies">
            <Header onBurgerMenu={handleBurgerMenuClick} />
            <BurgerMenu isOpen={isBurgerMenuOpen} onClose={closeBurgerMenu} />
            <SavedMovies />
            <Footer />
          </Route>
          <Route path="/signup">
            <Header />
            <Register />
          </Route>
          <Route path="/signin">
            <Header />
            <Login />
          </Route>
          <Route path="/profile">
            <Header onBurgerMenu={handleBurgerMenuClick} />
            <BurgerMenu isOpen={isBurgerMenuOpen} onClose={closeBurgerMenu} />

            <Profile />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
