import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/filters/filtersSelectors';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.list}>
        {contacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <Contact value={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}
