import css from './Modal.module.css';
import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';

export default function Modal({ onClose, id }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className={css.backdrop}>
        <div className={css.wrapper}>
          <p>Are you sure that you want to delete user?</p>
          <span className={css.container}>
            <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
              Yes, I am
            </button>
            <button className={css.btn} onClick={onClose}>
              No, I am not
            </button>
          </span>
        </div>
      </div>
    </>
  );
}
