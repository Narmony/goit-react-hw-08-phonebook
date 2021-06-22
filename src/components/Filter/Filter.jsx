import styles from './filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions';
import contactSelectors from '../../redux/contacts/contacts-selectors';

export default function Filter() {
  const value = useSelector(contactSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <label className={styles.searchWrap}>
      <span className={styles.title}>Find contacts by name:</span>
      <input
        type="text"
        value={value}
        onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
      />
    </label>
  );
}
