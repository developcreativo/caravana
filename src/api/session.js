import axios from 'axios';


const session = axios.create({
  baseURL: 'api/',
  withCredentials: true,
});
session.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
session.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export default session;
