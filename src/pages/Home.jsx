import picture from '../assets/Graphicloads-100-Flat-2-Addressbook-green.256.png';
import css from './Home.module.css';

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
    </div>
  );
}
