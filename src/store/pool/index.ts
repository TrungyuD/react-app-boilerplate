import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

interface PoolState {
  data?: any;
}

const initialState = {
  data: {},
};

export const poolSlice = createSlice({
  name: 'pool',
  initialState,
  reducers: {
    setPool: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { setPool: setPoolAction } = poolSlice.actions;

const { reducer: poolReducer } = poolSlice;

export default poolReducer;
