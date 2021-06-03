import {createSelector} from '@reduxjs/toolkit';
 
 const getLoading = state => state.contacts.loading;


 const getAllContacts = (state) => state.contacts.contacts;

 const getFilter = (state) => state.contacts.filter;

// export const getVisibleContacts = state =>{
//     const filter = getFilter(state);
//     const allContacts = getAllContacts(state);
//     const normalizedFilter = filter.toLowerCase();

//     return (allContacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     ));
// }

export const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default {
    getLoading,
    getFilter,
    // getVisibleContacts,

}

// export const getVisibleContacts = state => {
//     const filter = getFilter(state);
//     const allContacts = getAllContacts(state);
//     const normalizedFilter = filter.toLowerCase();
//      return allContacts.filter(({ name }) =>
//        name.toLowerCase().includes(normalizedFilter)
//      );

// }
