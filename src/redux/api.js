import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { error } from 'notifications/notiflixInit';

axios.defaults.baseURL = 'https://657a08321acd268f9afa9c2a.mockapi.io/nhnserg';

const notifyError = message => {
  error(message);
};

export const fetchContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch ({ message }) {
      notifyError(message);
      thunkAPI.rejectWithValue(message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', newContact, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return data;
    } catch ({ message }) {
      notifyError(message);
      thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);

      return data;
    } catch ({ message }) {
      notifyError(message);
      thunkAPI.rejectWithValue(message);
    }
  }
);
