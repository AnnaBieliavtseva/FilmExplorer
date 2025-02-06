import { NavLink } from "react-router-dom";
import css from './MovieList.module.css'

function MovieList({ films }) {
  return (
    <ul className={css.list}>
      {films.map(({ id, title, poster_path }) => (
        <li key={id} className={css.item}>
          <NavLink to={`/movies/${id}`} className={css.link}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt=""
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
