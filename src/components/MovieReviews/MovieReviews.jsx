import { useState, useEffect } from 'react';
import { fetchFilmReviews } from '../../services/fetchFilms';
import css from './MovieReviews.module.css';
import '../../components/index.css';
import { useParams } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import Loader from '../Loader/Loader';
import ReviewItem from './ReviewItem';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

function MovieReviews() {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const [noReviews, setNoReviews] = useState(false);
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
          console.log(data);
        }
      } catch (error) {
        console.log('Error fetching reviews:', error.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchFilmById();
  }, [movieId]);

  if (error) {
    <NotFoundPage />;
  }

  if (noReviews) {
    return <h2>We don&apos;t have any reviews yet for this movie</h2>;
  }
  if (loading || !film) {
    return <Loader />;
  }
  return (
    <div>
      <ul className={css.list}>
        {film.results.map(({ id, author, content, created_at }) => (
          <ReviewItem
            key={id}
            author={author}
            content={content}
            created_at={created_at}
          ></ReviewItem>
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

export default MovieReviews;
