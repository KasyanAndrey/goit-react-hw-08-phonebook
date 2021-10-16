import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await axios.get('/contacts');
      return contacts.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const contact = await axios.post('/contacts', { name, number });
      return contact.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactID, { rejectWithValue }) => {
    try {
      await axios.delete(`contacts/${contactID}`);
      return contactID;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
