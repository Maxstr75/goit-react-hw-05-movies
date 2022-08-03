import axios from 'axios';
import { API_KEY } from 'services/key';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
};

// Поиск по трендам самых популярных фильмов на сегодня для создания коллекции на главной странице.
export const fetchTrends = async () => {
  const { data } = await axios.get(`/trending/movie/day`);
  const trends = data.results;
  return trends;
};
