import picture from '../assets/phone-book.png';
import css from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className={css.container}>
      <span>
        <h1 className={css.title}>Welcome to Your Ultimate Phonebook Companion</h1>
        <h3 className={css.titleText}>
          Simplify your life and take control of your contacts by adding, searching or deleting
          contacts seamlessly
        </h3>
      </span>

      <span>
        <img src={picture} alt="phoonebook icon" className={css.photo} />
      </span>
      <span>
        <Link to="/register">
          <button className={css.btn}>Get started</button>
        </Link>
      </span>
    </div>
  );
}
