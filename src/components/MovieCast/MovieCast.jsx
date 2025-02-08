import { useEffect, useState } from 'react';
import css from './MovieCast.module.css';
import { fetchFilmCredits } from '../../services/fetchFilms';
import { useParams } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import Loader from '../Loader/Loader';
import placeholder from '../../assets/Placeholder.png';

function MovieCast() {
  const { movieId } = useParams();
  const [noInfoCast, setnoInfoCast] = useState(false);
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchFilmById() {
      try {
        setLoading(true);
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
      } finally {
        setLoading(false);
      }
    }

    fetchFilmById();
  }, [movieId]);
  if (noInfoCast) {
    return <h2>No information about the cast</h2>;
  }
  if (!film) {
    return <Loader />;
  }

  return (
    <div>
      {loading && <Loader />}
      <ul className={css.list}>
        {film.cast.map(({ id, character, name, profile_path }) => (
          <li key={id} className={css.item}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : `${placeholder}`
              }
              alt={name}
              width={50}
              height={100}
              className={css.img}
            />
            <p className={css.accent}>{name}</p>
            <p className={css.text}>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieCast;
