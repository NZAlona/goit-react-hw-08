import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';
import css from './UserMenu.module.css';
import { logOutRequest } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <span className={css.wrapper}>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOutRequest())} className={css.btn}>
        Logout
      </button>
    </span>
  );
}
