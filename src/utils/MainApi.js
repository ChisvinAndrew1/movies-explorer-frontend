class MainApi {
  constructor(url) {
    this._url = url;
  }

  _setPromiseStatus = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка-статус: ${res.status}`);
  };

  getDefaultData() {
    return Promise.all([this.getInfo()]);
  }

  getInfo() {
    return fetch(`${this._url}users/me`, {
      credentials: "include",
    }).then(this._setPromiseStatus);
  }

  editInfo({ email, name }) {
    return fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, name }),
    }).then(this._setPromiseStatus);
  }
  getSavedMovies() {
    return fetch(`${this._url}movies`, {
      credentials: "include",
    }).then(this._setPromiseStatus);
  }

  addNewMovie(data) {
    return fetch(`${this._url}movies`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailerLink: data.trailerLink,
        thumbnail: data.thumbnail,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    }).then(this._setPromiseStatus);
  }

  deleteMovie(_id) {
    return fetch(`${this._url}movies/${_id}`, {
      method: "DELETE",
      credentials: "include",
    }).then(this._setPromiseStatus);
  }
}

const mainApi = new MainApi("https://api.chisvin.nomoredomains.xyz/");

export default mainApi;
