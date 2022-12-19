import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-tinder.onrender.com/',
  });
export default instance;