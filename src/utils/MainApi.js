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
  
    // getDefaultData() {
    //     return Promise.all([this.getInfo(), this.getCards()]);
    //   }
    
      getInfo() {
        return fetch(`${this._url}users/me`, {
          credentials: 'include',
        }).then(this._setPromiseStatus);
      }
    
      editInfo({ name, about }) {
        return fetch(`${this._url}users/me`, {
          method: "PATCH",
          headers: {"Content-type": "application/json"},
          credentials: 'include',
          body: JSON.stringify({
            name: name,
            about: about,
          }),
        }).then(this._setPromiseStatus);
      }
    
      editAvatar(data) {
        return fetch(`${this._url}users/me/avatar`, {
          method: "PATCH",
          headers: {"Content-type": "application/json"},
          credentials: 'include',
          body: JSON.stringify({
            avatar: data.avatar,
          }),
        }).then(this._setPromiseStatus);
      }
    
      getCards() {
        return fetch(`${this._url}cards`, {
          credentials: 'include',
        }).then(this._setPromiseStatus);
      }
    
      addCard({ place, link }) {
        return fetch(`${this._url}cards`, {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({
            name: place,
            link: link,
          }),
        }).then(this._setPromiseStatus);
      }
    
      deleteCard(_id) {
        return fetch(`${this._url}cards/${_id}`, {
          method: "DELETE",
          credentials: 'include',
        }).then(this._setPromiseStatus);
      }
    
      _addLike(_id) {
        return fetch(`${this._url}cards/${_id}/likes`, {
          method: "PUT",
          credentials: 'include',
        }).then(this._setPromiseStatus);
      }
    
      _removeLike(_id) {
        return fetch(`${this._url}cards/${_id}/likes`, {
          method: "DELETE",
          credentials: 'include',
        }).then(this._setPromiseStatus);
      }
    
      checkDateLike(_isLiked, _id) {
        return _isLiked ? this._addLike(_id) : this._removeLike(_id);
      }
    }
  
  const MoviesApi = new MainApi("https://api.chisvin.nomoredomains.xyz");
  
  export default MainApi;
  