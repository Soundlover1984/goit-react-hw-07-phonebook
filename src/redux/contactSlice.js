import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    extraReducers: {
      [fetchContacts.pending]: state => {
        state.isLoading = true;
      },
      [fetchContacts.fulfilled]: (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      },
      [fetchContacts.rejected]: (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      },
      [addContact.pending]: state => {
        state.isLoading = true;
      },
      [addContact.fulfilled]: (state, { payload }) => {
        state.items.push(payload);
        state.isLoading = false;
        state.error = null;
      },
      [addContact.rejected]: (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      },
      [deleteContact.pending]: state => {
        state.isLoading = true;
      },
      [deleteContact.fulfilled]: (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(contact => contact.id !== payload.id);
      },
      [deleteContact.rejected]: (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      },
    },
  },
});
