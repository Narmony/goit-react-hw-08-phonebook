import { Component } from 'react';
import { connect } from 'react-redux';
import ContactsForm from '../components/ContactsForm';
import ContactsList from '../components/ContactsList';
import Filter from '../components/Filter';
import contactsOperations from '../redux/contacts/contacts-operations';
import contactsSelectors from '../redux/contacts/contacts-selectors';
import '../styles.css';
// import { v4 as uuidv4 } from 'uuid';

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className="app">
        <ContactsForm />
        {this.props.isLoadingContacts && <h1>Loading...</h1>}
        <Filter />
        <ContactsList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
