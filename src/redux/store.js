import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import contactSlice from './contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    contacts: contactSlice,
  },
});
