import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  extraReducers: {
    [contactsOperations.getContacts.fulfilled](state, action) {
      state.push(...action.payload);
    },
    [contactsOperations.addContacts.fulfilled](state, action) {
      state.push(action.payload);
    },
    [contactsOperations.removeContact.fulfilled](state, action) {
      console.log('~ action.payload', action.payload);
      return state.filter(el => el.id !== action.payload);
    },
  },
});

export default contactsSlice.reducer;
