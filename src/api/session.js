import axios from 'axios';


const session = axios.create({
  baseURL: 'http://innovasystem.pythonanywhere.com/api/',
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Credentials': true,
  },
});
session.defaults.headers.post['Content-Type'] = 'application/json';

export default session;
