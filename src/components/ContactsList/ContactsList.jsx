import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import contactsOperations from '../../redux/contacts/contacts-operations';
import * as contactSelectors from '../../redux/contacts/contacts-selectors';
import Button from 'react-bootstrap/Button';
import styles from './contactsList.module.css';

function ContactsList() {
  const contacts = useSelector(contactSelectors.getVisibleContacts);
  const dispatch = useDispatch();
  // const onDelete = useCallback(
  //   () => dispatch(contactsOperations.deleteContact(id)),
  //   [dispatch],
  // );

  return (
    <div className={styles.contacts_block}>
      <span className={styles.contacts_title}>Contacts:</span>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li className={styles.contact_item} key={id}>
            <span className={styles.name}>{name}</span>
            <span className={styles.number}>{number}</span>
            <Button
              variant="outline-danger"
              size="sm"
              className={styles.button}
              onClick={() => dispatch(contactsOperations.deleteContact(id))}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ContactsList.propTypes = {
//   contacts: PropTypes.array.isRequired,
// };

export default ContactsList;
