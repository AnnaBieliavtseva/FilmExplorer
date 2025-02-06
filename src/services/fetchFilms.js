import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTZjZDY5MWYyMTA5Mjk2N2QxYzRlYzg0ZTZmMWU3YSIsIm5iZiI6MTczODIyOTU4My4wODksInN1YiI6IjY3OWI0NzRmZTIxY2JiOWE1YjM0NTVlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bc-7PU73w40WhgoQt78_e3OOUWZqW6f8HglSv-MasnY',
  },
};

const fetchTrendingFilms = async () => {
  const { data } = await axios.get(
    '/trending/movie/day?language=en-US',
    options
  );

  return data.results;
};

export default fetchTrendingFilms;

export const fetchFilmsById = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}?language=en-US`, options);
  console.log(data);

  return data;
};

export const fetchFilmCredits = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?language=en-US`,
    options
  );
  console.log(data);

  return data;
};

export const fetchFilmReviews = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  console.log(data);

  return data;
};

export const fetchFilmsBySearch = async userQuery => {
  const { data } = await axios.get(
    `/search/movie?include_adult=false&language=en-US&page=1&query=${userQuery}`,
    options
  );

  return data;
};
