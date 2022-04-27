import { createSlice } from '@reduxjs/toolkit';
import filterOperations from './filter-operations';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  extraReducers: {
    [filterOperations.filter.fulfilled](_, action) {
      return action.payload;
    },
  },
});

export default filterSlice.reducer;
