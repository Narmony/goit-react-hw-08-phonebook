// import { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import Button from 'react-bootstrap/Button';

import { v4 as uuidv4 } from 'uuid';
import styles from './contactsForm.module.css';

export default function ContactsForm() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: '',
    number: '',
  });

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(contactsOperations.addContact(user));
    reset();
  };

  const reset = () => {
    setUser({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Phonebook</h2>
      <div className={styles.form}>
        <label htmlFor={nameInputId} className={styles.name_input}>
          <span>Name</span>
          <input
            onChange={handleChange}
            id={nameInputId}
            type="text"
            name="name"
            value={user.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label htmlFor={numberInputId} className={styles.number_input}>
          <span>Number</span>
          <input
            onChange={handleChange}
            id={numberInputId}
            type="tel"
            name="number"
            value={user.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
          <Button
            type="submit"
            variant="outline-dark"
            className={styles.add_Btn}
          >
            Add contact
          </Button>
        </label>
      </div>
    </form>
  );
}

// class ContactsForm extends Component {
// state = {
//   name: '',
//   number: '',
//   };

//   nameInputId = uuidv4();
//   numberInputId = uuidv4();

//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { onSubmit } = this.props;
//     onSubmit(this.state);
//     // this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <h2>Phonebook</h2>
//         <div className={styles.form}>
//           <label htmlFor={this.nameInputId} className={styles.name_input}>
//             <span>Name</span>
//             <input
//               onChange={this.handleChange}
//               id={this.nameInputId}
//               type="text"
//               name="name"
//               value={this.state.name}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//               required
//             />
//           </label>

//           <label htmlFor={this.numberInputId} className={styles.number_input}>
//             <span>Number</span>
//             <input
//               onChange={this.handleChange}
//               id={this.numberInputId}
//               type="tel"
//               name="number"
//               value={this.state.number}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//               required
//             />
//             <Button
//               type="submit"
//               variant="outline-dark"
//               className={styles.add_Btn}
//             >
//               Add contact
//             </Button>
//           </label>
//         </div>
//       </form>
//     );
//   }
// }

// ContactsForm.propTypes = {
//   initialState: PropTypes.object,
//   onSubmit: PropTypes.func,
// };

// const mapDispatchToProps = dispatch => ({
//   onSubmit: value => dispatch(contactsOperations.addContact(value)),
// });

// export default connect(null, mapDispatchToProps)(ContactsForm);
