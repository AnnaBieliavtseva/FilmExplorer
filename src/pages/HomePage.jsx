import fetchTrendingFilms from '../services/fetchTrendingFilms';
import css from './HomePage.module.css';
import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList/MovieList';
import fetchFilmsById from '../services/fetchFilmsById';

function HomePage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchFilms() {
      try {
        const data = await fetchTrendingFilms();
        console.log('Fetched films:', data);
        setFilms(data);
      } catch (error) {
        console.log('Error fetching films:', error.message);
      }
    }

    fetchFilms();
  }, []);
    
    
    
    
    // const handleClick = () => {
    //     console.log(evt);
        
    // }

  return (
    <div className={css.container}>
      <h2>Trending Today</h2>
      <ul><MovieList films={films}></MovieList>
      
      </ul>
    </div>
  );
}

export default HomePage;
