import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './Slices/UserSlice.jsx';
import ItemsSlice from './Slices/ItemsSlice';

export const store = configureStore({
  reducer: {
    user: UserSlice,
    items: ItemsSlice,
  },
});
