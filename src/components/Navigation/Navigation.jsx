import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import '../../components/index.css';

const navLinkCLass = ({ isActive }) => {
  return clsx('navItem', isActive && 'active');
};

function Navigation() {
  return (
    <header>
      <nav className="nav">
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
