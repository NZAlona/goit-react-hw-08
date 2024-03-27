import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import css from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/authentication/authSelectors';

export default function AppBar() {
  const isLogged = useSelector(selectIsLoggedIn);

  return (
    <header className={css.navHeader}>
      <Navigation />
      {isLogged ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
