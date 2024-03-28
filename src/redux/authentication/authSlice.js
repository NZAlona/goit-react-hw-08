import { createSlice } from '@reduxjs/toolkit';
import { logOutRequest, loginRequest, registerRequest } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    error: false,
  },
  extraReducers: builder =>
    builder
      .addCase(registerRequest.pending, state => {
        state.isLoggedIn = false;
      })
      .addCase(registerRequest.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerRequest.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload;
      })
      .addCase(loginRequest.pending, state => {
        state.isLoggedIn = false;
      })
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginRequest.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload;
      })
      .addCase(logOutRequest.pending, state => {
        state.isLoggedIn = true;
      })
      .addCase(logOutRequest.fulfilled, state => {
        state.isLoggedIn = false;
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
      })
      .addCase(logOutRequest.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload;
      }),
});

export default authSlice.reducer;
