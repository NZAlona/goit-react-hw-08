import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// passing token in headers with every next HTTP request to let server know about user's creadentials
const setAuthHeader = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

// When user logout we clear bearer token
const clearAutHeader = () => {
  axios.defaults.headers.common['Authorization'] = ' ';
};

export const registerRequest = createAsyncThunk('auth/register', async (userInfo, thunkAPI) => {
  try {
    const response = await axios.post('/users/signup', userInfo);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const loginRequest = createAsyncThunk('auth/login', async (userInfo, thunkAPI) => {
  try {
    const response = await axios.post('/users/login', userInfo);
    setAuthHeader(response.data.token);
    // passing token in headers with every next HTTP request to let server know about user's creadentials
    // axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOutRequest = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.post('/users/logout');
    clearAutHeader();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      // Reading token from the redux state via getState() which thunkApi consist in itself
      const reduxState = thunkAPI.getState();
      const savedToken = reduxState.auth.token;
      setAuthHeader(savedToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      const savedToken = reduxState.auth.token;
      return savedToken !== null;
    },
  }
);
