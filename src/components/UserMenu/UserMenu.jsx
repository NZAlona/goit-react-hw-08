import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/authentication/authSelectors';
import css from './UserMenu.module.css';
import { logOutRequest } from '../../redux/authentication/operations';
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
