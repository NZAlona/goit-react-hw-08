import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const getCurrentLink = ({ isActive }) => {
  return clsx(css.navlink, isActive && css.active);
};

export default function Navigation() {
  return (
    <>
      <nav className={css.navig}>
        <NavLink to="/" className={getCurrentLink}>
          Home
        </NavLink>

        <NavLink to="/contacts" className={getCurrentLink}>
          Contacts
        </NavLink>
      </nav>
    </>
  );
}
