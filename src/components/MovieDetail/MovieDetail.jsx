import css from './MovieDetail.module.css';

function MovieDetail({
  film: { title, release_date, poster_path, overview, vote_average, genres },
}) {
  return (
    <div className={css.container}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        width={320}
        height={440}
        className={css.img}
      />
      <div className={css.thumb}>
        <h2>
          {title} ({release_date.slice(0, 4)})
        </h2>
        <p>
          User score: <span>{Math.round(vote_average * 10)}%</span>
        </p>
        <h3>Overview:</h3>
        <p>{overview}</p>
        <h3>Genres:</h3>
        <ul className={css.genres}>
          {genres.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MovieDetail;
