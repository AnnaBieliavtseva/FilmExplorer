import { useParams } from 'react-router-dom';
import MovieCast from '../components/MovieCast/MovieCast'
import MovieReviews from '../components/MovieReviews/MovieReviews'
import fetchFilmsById from '../services/fetchFilmsById';

function MoviesDetailsPage() {

    const [film, setFilm] = useState([]);
   
    const { id } = useParams();
    
      useEffect(() => {
          async function fetchFilmsId() {
          try {
              const data = await fetchFilmsById({ id });
              console.log(data);
              setFilm(data)
          } catch (error) {
            console.log('Error fetching films:', error.message);
          }
        }

        fetchFilmsId();
      }, []);
    

  return (
    <div>
          <button>Go back</button>
          <p>Additional information: {film}</p>
          <MovieCast></MovieCast>
          <MovieReviews></MovieReviews>
    </div>
  )
}

export default MoviesDetailsPage
