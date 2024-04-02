import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/contactsSelectors';
// import { selectFilteredContacts } from '../../redux/contactsSlice';

export default function ContactList() {
  // const contacts = useSelector(selectFilteredContacts);
  const contacts = useSelector(selectContacts);

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
