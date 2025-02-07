import MovieList from '../../components/MovieList/MovieList';
import { animateScroll } from 'react-scroll';
import { fetchFilmsBySearch } from '../../services/fetchFilms';
import css from './MoviesPage.module.css';
import { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';

function MoviesPage() {
  const [films, setFilms] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  

  function handleSumbit(evt) {
    evt.preventDefault();
    const inputValue = evt.target.elements.input.value.trim();
    if (!inputValue) {
      return alert("OUu")
    }
    searchParams.set('query', inputValue);
    setSearchParams(searchParams);
    evt.target.reset();
  }

  useEffect(() => {
    async function fetchFilmByUserQuery() {
      try {
        setLoading(true);
        const data = await fetchFilmsBySearch(query);
        setFilms(data.results);
        animateScroll.scrollTo(400,{
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
  }, [query]);

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
