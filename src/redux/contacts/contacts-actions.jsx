import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deliteContactRequest = createAction(
  'contacts/deliteContactRequest',
);
export const deliteContactSuccess = createAction(
  'contacts/deliteContactSuccess',
);
export const deliteContactError = createAction('contacts/deliteContactError');

export const changeFilter = createAction('App/changeFilter');
