import { NavLink } from "react-router-dom";

function MovieList({ films }) {
  return (
    <div>
      {films.map(({ id, original_title }) => (
        <li key={id}>
          <NavLink to={`/movies/${id}`}>{original_title}</NavLink>
        </li>
      ))}
    </div>
  );
}

export default MovieList
