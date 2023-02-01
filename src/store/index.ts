import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import blacklistReducer from './blacklist';
import poolReducer from './pool';

const middleware = [thunk];

const store = configureStore({
  reducer: {
    pool: poolReducer,
    blacklist: blacklistReducer,
  },
  middleware,
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
