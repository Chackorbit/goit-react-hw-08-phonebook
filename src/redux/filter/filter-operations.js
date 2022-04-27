import { createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const filter = createAsyncThunk('filter/find', data => {
  return data;
});

const operations = {
  filter,
};
export default operations;
