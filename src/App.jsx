import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import AppBar from './components/AppBar';
import AppBar from './components/AppBar.js'
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import Container from './components/Container';

const App =()=> 
 (
      <Container>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={ContactsView} />
        </Switch>
      </Container>
    );



export default App;



// import { Component } from 'react';
// import { connect } from 'react-redux';
// import ContactsForm from './components/ContactsForm';
// import ContactsList from './components/ContactsList';
// import Filter from './components/Filter';
// import contactsOperations from './redux/contacts/contacts-operations';
// import contactsSelectors from './redux/contacts/contacts-selectors';
// import './styles.css';
// // import { v4 as uuidv4 } from 'uuid';

// class App extends Component {
//   componentDidMount() {
//     this.props.fetchContacts();
//   }

//   render() {
//     return (
//       <div className="app">
//         <ContactsForm />
//         {this.props.isLoadingContacts && <h1>Loading...</h1>}
//         <Filter />
//         <ContactsList />
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   isLoadingContacts: contactsSelectors.getLoading(state),
// });

// const mapDispatchToProps = dispatch => ({
//   fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(App);
