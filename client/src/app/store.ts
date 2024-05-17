import { configureStore } from '@reduxjs/toolkit';
import Events from '../shared/libs/slices/Events';
import Pages from '../shared/libs/slices/Pages';
import CurrentPage from '../shared/libs/slices/CurrentPage';
import SpinnerVisible from '../shared/libs/slices/SpinnerVisible';
import Users from '../shared/libs/slices/Users';

export const store = configureStore({
  reducer: {
    Events: Events,
    Pages: Pages,
    CurrentPage: CurrentPage,
    SpinnerVisible: SpinnerVisible,
    Users: Users
  },
});
