export const BASE_URL = 'https://api.chisvin.nomoredomains.xyz';

const checkResponse = (response) => {
  console.log('response ok: ', response);
  if (response.ok) {
    return response.json();
  }

  return Promise.reject(`Ошибка ${response.status}`)}

export const register = ({email, password}) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({email, password})
  })
  .then(checkResponse)
};
export const authorize = ({email, password}) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({email, password})
  })
  .then(checkResponse)
};
export const getContent = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`,
    },
    credentials: 'include',
  })
  .then(res => res.json())
}

export const signout = () => {
  return fetch(`${BASE_URL}/signout`, {
    credentials: 'include',
  })
  .then(this._handleResponse)
}


