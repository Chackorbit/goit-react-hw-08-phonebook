import { createAsyncThunk } from '@reduxjs/toolkit';

const filter = createAsyncThunk('filter/find', data => {
  return data;
});

const operations = {
  filter,
};
export default operations;
