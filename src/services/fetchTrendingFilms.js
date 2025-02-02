import axios from 'axios';

const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTZjZDY5MWYyMTA5Mjk2N2QxYzRlYzg0ZTZmMWU3YSIsIm5iZiI6MTczODIyOTU4My4wODksInN1YiI6IjY3OWI0NzRmZTIxY2JiOWE1YjM0NTVlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bc-7PU73w40WhgoQt78_e3OOUWZqW6f8HglSv-MasnY',
  },
};

// axios
//   .get(url, options)
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// const UNSPLASH_KEY = import.meta.env.VITE_API_KEY;
// const AUTH_TOKEN =
//   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTZjZDY5MWYyMTA5Mjk2N2QxYzRlYzg0ZTZmMWU3YSIsIm5iZiI6MTczODIyOTU4My4wODksInN1YiI6IjY3OWI0NzRmZTIxY2JiOWE1YjM0NTVlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bc-7PU73w40WhgoQt78_e3OOUWZqW6f8HglSv-MasnY';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const fetchTrendingFilms = async () => {
  const response = await axios.get(url, options);
  // console.log(response.data.results);

  return response.data.results;
};

export default fetchTrendingFilms;
