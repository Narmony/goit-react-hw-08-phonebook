import styles from './contactsList.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import * as contactSelectors from '../../redux/contacts/contacts-selectors';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <div className={styles.contacts_block}>
      <span className={styles.contacts_title}>Contacts:</span>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li className={styles.contact_item} key={id}>
            <span className={styles.name}>{name}</span>
            <span className={styles.number}>{number}</span>
            <button onClick={() => onDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLocaleLowerCase();

//   return allContacts.filter(contact =>
//     contact.name.toLocaleLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = ({ contacts: { contacts, filter } }) => ({
//   contacts: getVisibleContacts(contacts, filter),
// });

const mapStateToProps = (state) => ({
  contacts: contactSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
