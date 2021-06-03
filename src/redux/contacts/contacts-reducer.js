import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError
} from './contacts-actions';


const checkName = (state, { payload }) => {
  const checkedName = state.map(contact => contact.name).includes(payload.name);
  if (checkedName) {
    alert(`${payload.name} is already in contacts`);
    return;
  }
  return [...state, payload];
};


const contacts = createReducer([], {
  [fetchContactsSuccess]: (state, {payload})=>payload,
  [addContactSuccess]: (state, { payload }) => checkName(state, { payload }),
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});
// const error => createReducer(null, {

// })
const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
  loading,
});
