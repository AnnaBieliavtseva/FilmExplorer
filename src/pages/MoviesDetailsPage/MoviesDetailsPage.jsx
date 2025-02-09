import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import css from './MoviesDetailsPage.module.css';
import '../../components/index.css';
import { fetchFilmsById } from '../../services/fetchFilms';
import MovieDetail from '../../components/MovieDetail/MovieDetail';
import Loader from '../../components/Loader/Loader';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const navLinkCLass = ({ isActive }) => {
  return clsx('navItem', isActive && 'active');
};

function MoviesDetailsPage() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [film, setFilm] = useState(null);
  const [error, setError] = useState(false);
  const location = useLocation();
  const goBackUrl = useRef(location?.state ?? '/movies')

  useEffect(() => {
    async function fetchFilmById() {
      try {
        setLoading(true);
        setError(false)
        const data = await fetchFilmsById(movieId);
        setFilm(data);
      } catch (error) {
        console.log('Error fetching film by id:', error.message);
        setError(true)
      } finally {
        setLoading(false);
      }
    }

    fetchFilmById();
  }, [movieId]);
  
  if (error) {
    return <NotFoundPage/>
  }

  if (!film) {
    return <Loader/>
  }
  return (
    <div>
      <NavLink to={goBackUrl.current} className='btn'>Go back</NavLink>
      {loading && <Loader />}
      <MovieDetail film={film} />
      <p className={css.text}>Additional information:</p>
      <nav className='nav'>
        <NavLink to="cast" className={navLinkCLass}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={navLinkCLass}>
          Reviews
        </NavLink>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default MoviesDetailsPage;
