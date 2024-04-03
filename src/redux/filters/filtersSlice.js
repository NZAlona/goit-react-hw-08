import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter: {
      reducer(state, action) {
        state.name = action.payload;
      },
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
