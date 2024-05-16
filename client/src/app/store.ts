import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import Tasks from '../shared/libs/slices/Tasks';

export const store = configureStore({
  reducer: {
    Tasks: Tasks
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
