import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const navLinkCLass = ({ isActive }) => {
  return clsx(css.navItem, isActive && css.active);
};

function Navigation() {
  return (
    <header>
      <nav className={css.nav}>
        <NavLink to="/" className={navLinkCLass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={navLinkCLass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}

export default Navigation;
