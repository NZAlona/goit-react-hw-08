import { useId } from 'react';
import css from './SearchBox.module.css';
// import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
// import { useDispatch, useSelector } from 'react-redux';

export default function SearchBox() {
  // const dispatch = useDispatch();
  // const inputValue = useSelector(selectNameFilter);

  const inputField = useId();

  return (
    <>
      <label htmlFor={inputField} className={css.labelText}>
        Find contacts by name
      </label>

      <input
        type="text"
        id={inputField}
        // value={inputValue}
        // onChange={e => dispatch(changeFilter(e.target.value))}

        className={css.inputField}
      />
    </>
  );
}
