import fetchTrendingFilms from '../../services/fetchFilms';
import css from './HomePage.module.css';
import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';

function HomePage() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchFilms() {
      try {
        setLoading(true);
        const data = await fetchTrendingFilms();
        console.log('Fetched films:', data);
        setFilms(data);
      } catch (error) {
        console.log('Error fetching films:', error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchFilms();
  }, []);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Trending Today</h2>
      {loading && <Loader />}
      <ul>
        <MovieList films={films}></MovieList>
      </ul>
    </div>
  );
}

export default HomePage;
