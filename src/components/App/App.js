import React, { useState } from "react";
import info_ok from "../../images/info-ok.jpg";
import info_err from "../../images/info-err.jpg";

import "./App.css";
import * as auth from "../../utils/Auth";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound ";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { IsLoggedInContext } from "../../contexts/isloggedInContext";
import mainApi from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Preloader from "../Preloader/Preloader";
import InfoToolTip from "../InfoTooltip/InfoTooltip";

function App() {
  const location = useLocation();
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [savedMoviesList, setSavedMoviesList] = useState([]);
  const [load, setLoad] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const [isTooltipPopupOpen, setIsTooltipPopupOpen] = useState(false);
  const [infoPopup, setInfoPopup] = useState({});

  React.useEffect(() => {
    const path = location.pathname;
    setIsLoader(true);
    auth
      .getContent()
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          setCurrentUser(res);
          history.push(path);
        }
      })
      .catch((err) => {
        if (err === 401) {
          handleLogOut();
        }
        setIsTooltipPopupOpen(true);
        setInfoPopup({
          message: "Необходимо войти или зарегистрироваться!",
          img: info_err,
        });
      })
      .finally(() => {
        setIsLoader(false);
        setLoad(true);
      });
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      setIsLoader(true);
      mainApi
        .getDefaultData()
        .then((data) => {
          const [userData] = data;
          setCurrentUser(userData);
        })
        .catch((err) => {
          if (err === 401) {
            handleLogOut();
          }
          console.log(err);
          setIsTooltipPopupOpen(true);
          setInfoPopup({
            message:
              "Что-то пошло не так! Данные о пользователе не загрузились.",
            img: info_err,
          });
        })
        .finally(() => setIsLoader(false));
    }
  }, [loggedIn]);

  function handleBurgerMenuClick() {
    setIsBurgerMenuOpen(true);
  }
  function closePopups() {
    setIsBurgerMenuOpen(false);
    setIsTooltipPopupOpen(false);
  }

  function handleLogOut() {
    auth.signout().then(() => {
      setSavedMoviesList([]);
      localStorage.clear();
      setLoggedIn(false);
      setCurrentUser({});
      history.push("/");
    });
  }

  function handleRegistration(data) {
    setIsLoader(true);
    auth
      .register(data)
      .then((res) => {
        if (res) {
          console.log(res);
          history.push("/movies");
          setIsTooltipPopupOpen(true);
          setInfoPopup({
            message: "Вы успешно зарегистрировались!",
            img: info_ok,
          });
        }
      })
      .catch(() => {
        setIsTooltipPopupOpen(true);
        setInfoPopup({
          message: "Что-то пошло не так! Регистрация не прошла!",
          img: info_err,
        });
      })
      .finally(() => setIsLoader(false));
  }
  function handleAuth(data) {
    setIsLoader(true);
    auth
      .authorize(data)
      .then(() => {
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => {
        console.log(err);
        setIsTooltipPopupOpen(true);
        setInfoPopup({
          message: "Что-то пошло не так! Авторизация не успешна!",
          img: info_err,
        });
      })
      .finally(() => setIsLoader(false));
  }

  function handleProfile({ email, name }) {
    setIsLoader(true);
    mainApi
      .editInfo({ email, name })
      .then((newUserData) => {
        setCurrentUser(newUserData);
        setIsTooltipPopupOpen(true);
        setInfoPopup({
          message: "Ваши данные обновлены!",
          img: info_ok,
        });
      })
      .catch((err) => {
        if (err === 401) {
          handleLogOut();
        }
        setIsTooltipPopupOpen(true);
        setInfoPopup({
          message: "Что-то пошло не так! Не удалось обновить данные",
          img: info_err,
        });
      })
      .finally(() => setIsLoader(false));
  }

  function handleSaveMovie(movie) {
    mainApi
      .addNewMovie(movie)
      .then((newMovie) => {
        setSavedMoviesList([newMovie, ...savedMoviesList]);
        console.log(savedMoviesList);
      })
      .catch((err) => {
        if (err === 401) {
          handleLogOut();
        }
        setIsTooltipPopupOpen(true);
        setInfoPopup({
          message: "Что-то пошло не так! Фильм не удалось сохранить",
          img: info_err,
        });
      });
  }

  function handleDeleteMovie(movie) {
    console.log(movie);
    const savedMovie = savedMoviesList.find(
      (item) => item.movieId === movie.id || item.movieId === movie.movieId
    );
    console.log(savedMoviesList);
    mainApi
      .deleteMovie(savedMovie._id)
      .then(() => {
        const newMoviesList = savedMoviesList.filter((m) => {
          if (movie.id === m.movieId || movie.movieId === m.movieId) {
            return false;
          } else {
            return true;
          }
        });
        setSavedMoviesList(newMoviesList);
      })
      .catch((err) => {
        if (err === 401) {
          handleLogOut();
        }
        console.log(err);
        setIsTooltipPopupOpen(true);
        setInfoPopup({
          message: "Что-то пошло не так! Удалить фильм из сохраненных не вышло",
          img: info_err,
        });
      });
  }

  React.useEffect(() => {
    if (loggedIn && currentUser) {
      mainApi
        .getSavedMovies()
        .then((data) => {
          const UserMoviesList = data.filter(
            (m) => m.owner === currentUser._id
          );
          setSavedMoviesList(UserMoviesList);
        })
        .catch((err) => {
          if (err === 401) {
            handleLogOut();
          }
          console.log(err);
          setIsTooltipPopupOpen(true);
          setInfoPopup({
            message: "Что-то пошло не так! Список фильмов не загружен",
            img: info_err,
          });
        });
    }
  }, [currentUser, loggedIn]);

  return (
    <div className="App">
      {!load ? (
        <Preloader isOpen={isLoader} />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          <IsLoggedInContext.Provider value={loggedIn}>
            <div className="app__page">
              <Switch>
                <Route exact path="/">
                  <Header onBurgerMenu={handleBurgerMenuClick} />
                  <BurgerMenu isOpen={isBurgerMenuOpen} onClose={closePopups} />
                  <Main />
                  <Footer />
                </Route>
                <ProtectedRoute path="/signup" loggedIn={!loggedIn}>
                  <Header />
                  <Register handleRegister={handleRegistration} />
                </ProtectedRoute>
                <ProtectedRoute path="/signin" loggedIn={!loggedIn}>
                  <Header />
                  <Login onSubmit={handleAuth} />
                </ProtectedRoute>
                <ProtectedRoute path="/movies" loggedIn={loggedIn}>
                  <Header onBurgerMenu={handleBurgerMenuClick} />
                  <BurgerMenu isOpen={isBurgerMenuOpen} onClose={closePopups} />
                  <Movies
                    onLikeClick={handleSaveMovie}
                    savedMoviesList={savedMoviesList}
                    onDeleteClick={handleDeleteMovie}
                    setIsLoader={setIsLoader}
                  />
                  <Footer />
                </ProtectedRoute>
                <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
                  <Header onBurgerMenu={handleBurgerMenuClick} />
                  <BurgerMenu isOpen={isBurgerMenuOpen} onClose={closePopups} />
                  <SavedMovies
                    savedMoviesList={savedMoviesList}
                    onDeleteClick={handleDeleteMovie}
                  />
                  <Footer />
                </ProtectedRoute>
                <ProtectedRoute path="/profile" loggedIn={loggedIn}>
                  <Header onBurgerMenu={handleBurgerMenuClick} />
                  <BurgerMenu isOpen={isBurgerMenuOpen} onClose={closePopups} />

                  <Profile
                    handleProfile={handleProfile}
                    onLogOut={handleLogOut}
                  />
                </ProtectedRoute>

                <Route path="*">
                  <PageNotFound />
                </Route>
              </Switch>
              <InfoToolTip
                name="info"
                isOpen={isTooltipPopupOpen}
                onClose={closePopups}
                info={infoPopup}
              />
            </div>
          </IsLoggedInContext.Provider>
        </CurrentUserContext.Provider>
        //
      )}
    </div>
  );
}

export default App;
