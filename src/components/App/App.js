import React, { useState } from "react";
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

function App() {
  const location = useLocation();
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [savedMoviesList, setSavedMoviesList] = useState([]);
  const [load, setLoad] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  //регистрация и токен
  React.useEffect(() => {
    const path = location.pathname;
    setIsLoader(true);
    auth
      .getContent()
      .then((res) => {
        if (res) {
          console.log(res);
          setLoggedIn(true);
          setCurrentUser(res);
          history.push(path);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoader(false);
        setLoad(true);
      })
}, []);;

  React.useEffect(() => {
    if (loggedIn) {
      setIsLoader(true);
      mainApi
        .getDefaultData()
        .then((data) => {
          const [userData] = data;
          setCurrentUser(userData);
          // setCards(cardList.reverse());
        })
        .catch((err) => console.log(err)).finally(() => setIsLoader(false));;
    }
  }, [loggedIn]);

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
    history.push("/");
  }

  function handleRegistration(data) {
    setIsLoader(true)
    auth
      .register(data)
      .then((res) => {
        if (res) {
          console.log(res);
          history.push("/signin");
        }
      })
      .catch(() => {}).finally(() => setIsLoader(false));
  }
  function handleAuth(data) {
    setIsLoader(true);
    auth
      .authorize(data)
      .then(() => {
        setLoggedIn(true);
        // setEmail(res.email);
        history.push("/movies");
      })
      .catch((err) => {
        console.log(err);
        // setIsTooltipPopupOpen(true);
        // setInfoPopup({
        //   message: "Что-то пошло не так! Попробуйте еще раз.",
        //   img: info_err,
        // });
      }).finally(() => setIsLoader(false));
  }

  function handleProfile({ email, name }) {
    setIsLoader(true);
    mainApi
      .editInfo({ email, name })
      .then((newUserData) => {
        setCurrentUser(newUserData);
        // setIsInfoTooltip({
        //   isOpen: true,
        //   successful: true,
        //   text: 'Ваши данные обновлены!',
        // });
      })
      .catch(
        (err) => console.log(err)
        // setIsInfoTooltip({
        //   isOpen: true,
        //   successful: false,
        //   text: err,
        // })
      )
    .finally(() => setIsLoader(false));
  }

  function handleSaveMovie(movie) {
    mainApi
      .addNewMovie(movie)
      .then((newMovie) => {
        setSavedMoviesList([newMovie, ...savedMoviesList])
        console.log(savedMoviesList)
      })
      .catch(
        (err) => console.log(err)
        // setIsInfoTooltip({
        //   isOpen: true,
        //   successful: false,
        //   text: err,
        // })
      );
  }

  function handleDeleteMovie(movie) {
    console.log(movie)
    const savedMovie = savedMoviesList.find(
      (item) => item.movieId === movie.id || item.movieId === movie.movieId
    );
    console.log(savedMoviesList)
    mainApi
      .deleteMovie(savedMovie._id
        )
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
      .catch(
        (err) => console.log(err)
        // setIsInfoTooltip({
        //   isOpen: true,
        //   successful: false,
        //   text: err,
        // })
      );
  }

  React.useEffect(() => {
    if (loggedIn && currentUser) {
      mainApi
        .getSavedMovies()
        .then(data => {
          const UserMoviesList = data.filter(m => m.owner === currentUser._id);
          setSavedMoviesList(UserMoviesList);
        })
        .catch(err =>
          console.log(err)
          // setIsInfoTooltip({
          //   isOpen: true,
          //   successful: false,
          //   text: err,
          // })
        );
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
                <BurgerMenu
                  isOpen={isBurgerMenuOpen}
                  onClose={closeBurgerMenu}
                />
                <Main />
                <Footer />
              </Route>
              <Route path="/signup">
                <Header />
                <Register handleRegister={handleRegistration} />
              </Route>
              <Route path="/signin">
                <Header />
                <Login onSubmit={handleAuth} />
              </Route>
              <ProtectedRoute path="/movies" loggedIn={loggedIn}>
                <Header onBurgerMenu={handleBurgerMenuClick} />
                <BurgerMenu
                  isOpen={isBurgerMenuOpen}
                  onClose={closeBurgerMenu}
                />
                <Movies
                  onLikeClick={handleSaveMovie}
                  savedMoviesList={savedMoviesList}
                  onDeleteClick={handleDeleteMovie}
                />
                <Footer />
              </ProtectedRoute>
              <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
                <Header onBurgerMenu={handleBurgerMenuClick} />
                <BurgerMenu
                  isOpen={isBurgerMenuOpen}
                  onClose={closeBurgerMenu}
                />
                <SavedMovies
                  savedMoviesList={savedMoviesList}
                  onDeleteClick={handleDeleteMovie}
                />
                <Footer />
              </ProtectedRoute>
              <ProtectedRoute path="/profile" loggedIn={loggedIn}>
                <Header onBurgerMenu={handleBurgerMenuClick} />
                <BurgerMenu
                  isOpen={isBurgerMenuOpen}
                  onClose={closeBurgerMenu}
                />

                <Profile
                  handleProfile={handleProfile}
                  onLogOut={handleLogOut}
                />
              </ProtectedRoute>

              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
          </div>
      </IsLoggedInContext.Provider>
    </CurrentUserContext.Provider>
      // 
      )}
    </div>

  );
}

export default App;
