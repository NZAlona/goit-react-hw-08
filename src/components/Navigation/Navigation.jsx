import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const getCurrentLink = ({ isActive }) => {
  return clsx(css.navlink, isActive && css.active);
};

export default function Navigation() {
  return (
    <>
      <header className={css.navHeader}>
        <nav className={css.navig}>
          <NavLink to="/" className={getCurrentLink}>
            Home
          </NavLink>
          <span className={css.spanWrapper}>
            <NavLink to="/register" className={getCurrentLink}>
              Register
            </NavLink>
            <NavLink to="/login" className={getCurrentLink}>
              Log In
            </NavLink>
          </span>
        </nav>
      </header>
    </>
  );
}
