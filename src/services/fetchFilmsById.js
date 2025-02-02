import axios from 'axios';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTZjZDY5MWYyMTA5Mjk2N2QxYzRlYzg0ZTZmMWU3YSIsIm5iZiI6MTczODIyOTU4My4wODksInN1YiI6IjY3OWI0NzRmZTIxY2JiOWE1YjM0NTVlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bc-7PU73w40WhgoQt78_e3OOUWZqW6f8HglSv-MasnY',
  },
};

const fetchFilmsById = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/?${id}?language=en-US`,
    options
  );
  console.log(response.data.results);

  return response.data.results;
};

export default fetchFilmsById;
