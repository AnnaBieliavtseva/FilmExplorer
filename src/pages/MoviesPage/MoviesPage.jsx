import css from './MoviesPage.module.css'

function MoviesPage() {
  return (
    <div>
      <form className={css.form}>
        <input type="text" className={css.input}/>
        <button type="submit" className={css.btn}>Search</button>
      </form>
    </div>
  );
}

export default MoviesPage;
