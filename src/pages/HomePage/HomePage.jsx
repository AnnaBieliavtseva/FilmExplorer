import fetchTrendingFilms from '../../services/fetchFilms';
import css from './HomePage.module.css';
import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function HomePage() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchFilms() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchTrendingFilms();
        setFilms(data);
      } catch (error) {
        console.log('Error fetching films:', error.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchFilms();
  }, []);

  if (error) {
    return <NotFoundPage />;
  }

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
