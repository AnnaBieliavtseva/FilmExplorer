import { useEffect, useState } from 'react';
import css from './MovieCast.module.css';
import { fetchFilmCredits } from '../../services/fetchFilms';
import { useParams } from 'react-router-dom';


function MovieCast() {
const { movieId } = useParams();

const [film, setFilm] = useState(null);
  useEffect(() => {
      async function fetchFilmById() {
        try {
          const data = await fetchFilmCredits(movieId);
          console.log('Fetched cast:', data);
          setFilm(data);
        } catch (error) {
          console.log('Error fetching cast:', error.message);
        }
      }
  
      fetchFilmById();
    }, [movieId]);
  
    if (!film) {
      return <h2>Loading...</h2>;
    }
  return (



    <div>
      Cast
    </div>
  )
}

export default MovieCast
