import axios from 'axios';
import { API_KEY } from 'services/key';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
};
