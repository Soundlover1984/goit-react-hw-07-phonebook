import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://64d7f0055f9bf5b879ce10e4.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
        const response = await axios.get('/contacts');
        return response.data;
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async contact => {
      const response = await axios.post('/contacts', contact);
      return response.data;
    }
  );
  
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async id => {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data.id;
    }
  );