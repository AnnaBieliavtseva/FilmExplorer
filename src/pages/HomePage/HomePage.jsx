import fetchTrendingFilms from '../../services/fetchFilms';
import css from './HomePage.module.css';
import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';

function HomePage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchFilms() {
      try {
        const data = await fetchTrendingFilms();
        console.log('Fetched films:', data);
        setFilms(data);
      } catch (error) {
        console.log('Error fetching films:', error.message);
      }
    }

    fetchFilms();
  }, []);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Trending Today</h2>
      <ul>
        <MovieList films={films}></MovieList>
      </ul>
    </div>
  );
}

export default HomePage;
