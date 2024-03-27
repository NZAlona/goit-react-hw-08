import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import clsx from 'clsx';

const getCurrentLink = ({ isActive }) => {
  return clsx(css.navlink, isActive && css.active);
};

export default function AuthNav() {
  return (
    <span className={css.spanWrapper}>
      <NavLink to="/register" className={getCurrentLink}>
        Register
      </NavLink>
      <NavLink to="/login" className={getCurrentLink}>
        Log In
      </NavLink>
    </span>
  );
}
