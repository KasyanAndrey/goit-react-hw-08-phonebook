import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact} from './contacts-operations';
import { changeFilter} from './contacts-actions';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
})

const error = createReducer(null, {});

const contactsReducer = combineReducers({
  items,
  filter,
  loading,
  error,
});

export default contactsReducer;
