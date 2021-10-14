import axios from 'axios';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deliteContactRequest,
  deliteContactSuccess,
  deliteContactError,
} from './contacts-actions';

// GET @ /contacts
export const fetchContacts = () => dispatch => {
  dispatch(fetchContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactError(error)));
};

export const addContact =
  ({ name, number }) =>
  dispatch => {
    const contact = { name, number };

    dispatch(addContactRequest());

    axios
      .post('/contacts', contact)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch(error => dispatch(addContactError(error)));
  };

export const deliteContact = contactId => dispatch => {
  dispatch(deliteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deliteContactSuccess(contactId)))
    .catch(error => dispatch(deliteContactError(error)));
};
