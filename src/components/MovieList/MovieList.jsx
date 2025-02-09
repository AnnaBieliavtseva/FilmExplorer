import { NavLink, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';
import '../../components/index.css';
import placeholder from '../../assets/Placeholder.png';
import { useEffect, useState } from 'react';
import { animateScroll } from 'react-scroll';

function MovieList({ films }) {
  const location = useLocation();
  const [showButtonUp, setShowButtonUp] = useState(false);

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

  return (
    <>
      <ul className={css.list}>
        {films.map(({ id, title, poster_path }) => (
          <li key={id} className={css.item}>
            <NavLink to={`/movies/${id}`} className={css.link} state={location}>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : `${placeholder}`
                }
                alt={`Movie's title: ${title}`}
                width={150}
                height={200}
                className={css.img}
              />
              <p className={css.text}>{title}</p>
            </NavLink>
          </li>
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
    </>
  );
}

export default MovieList;
