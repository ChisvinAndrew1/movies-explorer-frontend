import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { Route, Switch, useHistory } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound ";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { IsLoggedInContext } from "../../contexts/isloggedInContext";

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(true);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  function handleBurgerMenuClick() {
    setIsBurgerMenuOpen(true);
  }
  function closeBurgerMenu() {
    setIsBurgerMenuOpen(false);
  }

  function handleLogOut() {
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.clear();
    history.push('/');
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
    <IsLoggedInContext.Provider value={loggedIn}>
    <div className="App">
      <div className="app__page">
        <Switch>
          <Route exact path="/">
            <Header/>
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

            <Profile 
            onLogOut={handleLogOut}/>
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </IsLoggedInContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
