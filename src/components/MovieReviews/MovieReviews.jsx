import { useState, useEffect } from 'react';
import { fetchFilmReviews } from '../../services/fetchFilms';
import css from './MovieReviews.module.css';
import { useParams } from 'react-router-dom';

function MovieReviews() {
  const { movieId } = useParams();

  const [film, setFilm] = useState(null);
  useEffect(() => {
    async function fetchFilmById() {
      try {
        const data = await fetchFilmReviews(movieId);
        console.log('Fetched reviews:', data);

        if (!data.results.length) {
          console.log('ooooo');

          return <h2>No reviews yet</h2>;
        }
        setFilm(data);
      } catch (error) {
        console.log('Error fetching reviews:', error.message);
      }
    }

    fetchFilmById();
  }, [movieId]);

  if (!film) {
    return <h2>Loading...</h2>;
  }
  return <div>Reviews</div>;
}

export default MovieReviews;
