import { FaUser } from 'react-icons/fa6';
import { BsFillTelephoneFill } from 'react-icons/bs';
import css from './Contact.module.css';
import { useState } from 'react';
import Modal from '../Modal/Modal';

export default function Contact({ value: { name, number, id } }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
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
        <button type="button" className={css.btn} onClick={() => setIsOpen(true)}>
          Delete
        </button>
      </span>
      {isOpen && <Modal onClose={closeModal} id={id} />}
    </>
  );
}
