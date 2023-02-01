import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

const initialState = {};

export const blacklistSlice = createSlice({
  name: 'blacklist',
  initialState,
  reducers: {},
});

const { reducer: blacklistReducer } = blacklistSlice;

export default blacklistReducer;
