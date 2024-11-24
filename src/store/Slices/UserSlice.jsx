import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  login: null,
  toke: null,
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = UserSlice.actions;

export default UserSlice.reducer;
