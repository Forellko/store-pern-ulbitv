import axios from 'axios';

  
const $host = axios.create({
  baseURL: 'localhost',
});

const $authHost = axios.create({});
