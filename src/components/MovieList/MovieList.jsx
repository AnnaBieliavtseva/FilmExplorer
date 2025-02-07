import { NavLink, useLocation } from "react-router-dom";
import css from './MovieList.module.css'
import placeholder from '../../assets/Placeholder.png'

function MovieList({ films }) {
  const location = useLocation();
  console.log(location);
  
  return (
    <ul className={css.list}>
      {films.map(({ id, title, poster_path }) => (
        <li key={id} className={css.item}>
          <NavLink to={`/movies/${id}`} className={css.link} state={location}>
            <img
              src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : `${placeholder}`}
              alt={title}
              width={150}
              height={200}
              className={css.img}
            />
            <p className={css.text}>{title}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default MovieList
