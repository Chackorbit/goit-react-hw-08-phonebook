import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';

const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async newContact => {
    const { data } = await axios.post('/contacts', newContact);

    return data;
  }
);

const getContacts = createAsyncThunk('contacts/getContacts', async () => {
  const { data } = await axios.get('/contacts');

  return data;
});

const removeContact = createAsyncThunk('contacts/removeContact', async id => {
  await axios.delete(`/contacts/${id}`);
  return id;
});

const operations = {
  getContacts,
  addContacts,
  removeContact,
};
export default operations;
