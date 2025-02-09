import { useEffect, useState } from 'react';
import css from './MovieCast.module.css';
import '../../components/index.css';
import { fetchFilmCredits } from '../../services/fetchFilms';
import { useParams } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import Loader from '../Loader/Loader';
import placeholder from '../../assets/Placeholder.png';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

function MovieCast() {
  const { movieId } = useParams();
  const [noInfoCast, setnoInfoCast] = useState(false);
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showButtonUp, setShowButtonUp] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButtonUp(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 1000,
      smooth: true,
    });
  };

  useEffect(() => {
    async function fetchFilmById() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchFilmCredits(movieId);
        if (!data.cast.length) {
          setnoInfoCast(true);
        } else {
          setFilm(data);
          setnoInfoCast(false);
        }

        animateScroll.scrollTo(450, {
          duration: 1000,
          smooth: true,
        });
      } catch (error) {
        console.log('Error fetching cast:', error.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchFilmById();
  }, [movieId]);

  if (error) {
    return <NotFoundPage />;
  }

  if (noInfoCast) {
    return <h2>No information about the cast</h2>;
  }
  if (loading || !film) {
    return <Loader />;
  }

  return (
    <div>
      <ul className={css.list}>
        {film.cast.map(({ id, character, name, profile_path }) => (
          <li key={id} className={css.item}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : `${placeholder}`
              }
              alt={`Actor's name: ${name}`}
              width={50}
              height={100}
              className={css.img}
            />
            <p className={css.accent}>{name}</p>
            <p className={css.text}>Character: {character}</p>
          </li>
        ))}
      </ul>
      {showButtonUp && (
        <button
          onClick={scrollToTop}
          className="upButton"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default MovieCast;
