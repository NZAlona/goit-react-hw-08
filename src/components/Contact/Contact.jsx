import { FaUser } from 'react-icons/fa6';
import { BsFillTelephoneFill } from 'react-icons/bs';
import css from './Contact.module.css';
// import { deleteContact } from '../../redux/contactsOps';
// import { useDispatch } from 'react-redux';

export default function Contact({ value: { name, number, id } }) {
  // const dispatch = useDispatch();

  return (
    <>
      <span className={css.spanWrapper}>
        <p>
          <FaUser className={css.icons} />
          {name}
        </p>

        <p>
          <BsFillTelephoneFill className={css.icons} />
          {number}
        </p>
      </span>

      <span>
        <button type="button" className={css.btn} onClick={() => dispatch(deleteContact(id))}>
          Delete
        </button>
      </span>
    </>
  );
}
