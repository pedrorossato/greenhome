import axios from 'axios';

const TOKEN_KEY = "@token-session";
const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
const getToken = () => localStorage.getItem(TOKEN_KEY);
const setToken = (token: string) => { localStorage.setItem(TOKEN_KEY, token); }

const apiService = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axios.interceptors.request.use(reqConfig => {
  const token = getToken();
  if(isAuthenticated()) {
    reqConfig.headers.authorization = `Bearer ${token}`;
  }
  return reqConfig;
});

axios.interceptors.response.use(
  response => {
    return response;
}, error => {
  if(error.response.status === 401 || error.response.status === 403) {
    localStorage.removeItem(TOKEN_KEY);
    window.location.href = '/login';
  }
  return Promise.reject(error);
});

export { setToken };
export default apiService;