class MoviesApi {
    constructor(url) {
      this._url = url;
    }
  
    _setPromiseStatus = (res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка-статус: ${res.status}`);
    };
  
    getMovies() {
        return fetch(`${this._url}`, {
          method: 'GET',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
        }).then(this._setPromiseStatus);
      }
    }

  
  const moviesApi = new MoviesApi("https://api.nomoreparties.co/beatfilm-movies");
  
  export default moviesApi;
  