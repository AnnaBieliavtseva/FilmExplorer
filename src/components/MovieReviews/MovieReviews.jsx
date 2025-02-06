import { useState, useEffect } from 'react';
import { fetchFilmReviews } from '../../services/fetchFilms';
import css from './MovieReviews.module.css';
import { useParams } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import Loader from '../Loader/Loader';

function MovieReviews() {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const [noReviews, setNoReviews] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchFilmById() {
      try {
        setLoading(true)
        const data = await fetchFilmReviews(movieId);
        animateScroll.scrollTo(450, {
          duration: 1000,
          smooth: true,
        });
        if (!data.results.length) {
          setNoReviews(true);
        } else {
          setFilm(data);
          setNoReviews(false);
        }
      } catch (error) {
        console.log('Error fetching reviews:', error.message);
      } finally {
        setLoading(false)
      }
    }

    fetchFilmById();
  }, [movieId]);
  if (noReviews) {
    return <h2>No reviews yet</h2>;
  }
  if (!film) {
    return <Loader/>
  }
  return (
    <div>
      {loading && <Loader />}
      <ul className={css.list}>
        {film.results.map(({ id, author, content, created_at }) => (
          <li key={id} className={css.item}>
            <p className={css.text}>
              <span className={css.accent}> Author: </span> {author}
            </p>
            <p className={css.text}>
              <span className={css.accent}> Date: </span>
              {created_at.slice(0, 10)}
            </p>
            <p className={css.text}>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieReviews;
