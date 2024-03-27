import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/authentication/authSelectors';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const user = useSelector(selectUser);

  return (
    <span className={css.wrapper}>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => {}} className={css.btn}>
        Logout
      </button>
    </span>
  );
}
