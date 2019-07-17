import axios from 'axios';

let options = {
  baseURL: 'http://localhost:3000/',
  responseType: 'json',
};

if (localStorage.getItem('jwt')) {
  options = {
    ...options,
    headers: { Authorization: localStorage.getItem('jwt') },
  };
}

export default axios.create(options);
