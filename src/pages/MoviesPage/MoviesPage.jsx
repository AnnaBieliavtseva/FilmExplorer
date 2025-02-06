import MovieList from '../../components/MovieList/MovieList';
import { animateScroll } from 'react-scroll';
import { fetchFilmsBySearch } from '../../services/fetchFilms';
import css from './MoviesPage.module.css';
import { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader';

function MoviesPage() {
  const [films, setFilms] = useState(null);
  const [userQuery, setUserQuery] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSumbit(evt) {
    evt.preventDefault();
    const inputValue = evt.target.elements.input.value.trim();
    setUserQuery(inputValue);
    evt.target.reset();
  }

  useEffect(() => {
    async function fetchFilmByUserQuery() {
      try {
        setLoading(true);
        const data = await fetchFilmsBySearch(userQuery);
        setFilms(data.results);
        animateScroll.scrollToBottom({
          duration: 1000,
          smooth: true,
        });
      } catch (error) {
        console.log('Error fetching film by id:', error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchFilmByUserQuery();
  }, [userQuery]);

  if (!films) {
    return <Loader />;
  }

  return (
    <div>
      <form className={css.form} onSubmit={handleSumbit}>
        <input type="text" name="input" className={css.input} />
        <button type="submit" className={css.btn}>
          Search
        </button>
      </form>
      {loading && <Loader />}
      <MovieList films={films}></MovieList>
    </div>
  );
}

export default MoviesPage;
