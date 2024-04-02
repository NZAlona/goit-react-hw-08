import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

const getCurrentLink = ({ isActive }) => {
  return clsx(css.navlink, isActive && css.active);
};

export default function Navigation() {
  const isLogged = useSelector(selectIsLoggedIn);
  return (
    <>
      <nav className={css.navig}>
        <NavLink to="/" className={getCurrentLink}>
          Home
        </NavLink>

        {isLogged && (
          <NavLink to="/contacts" className={getCurrentLink}>
            Contacts
          </NavLink>
        )}
      </nav>
    </>
  );
}
