import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from '../components/ContactList/ContactList';
import Loader from '../components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { selectLoading } from '../redux/contacts/contactsSelectors';
import css from '../pages/Contacts.module.css';

export default function Contacts() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}> New contact </h2>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}

      <ContactList />
    </div>
  );
}
