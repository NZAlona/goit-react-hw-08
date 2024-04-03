import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import css from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from '../../redux/auth/authSelectors';

export default function AppBar() {
  const isLogged = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <header className={css.navHeader}>
      <Navigation />
      {!isRefreshing && <span>{isLogged ? <UserMenu /> : <AuthNav />}</span>}
    </header>
  );
}
