import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import Events from '../shared/libs/slices/Events';
import CurrentPage from '../shared/libs/slices/CurrentPage';

export const store = configureStore({
  reducer: {
    Events: Events,
    CurrentPage: CurrentPage
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
