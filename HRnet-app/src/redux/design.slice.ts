import { createSlice } from '@reduxjs/toolkit';

export type InitialState = {
  open: boolean;
  dark: boolean;
};

const initialState: InitialState = {
  dark: true,
  open: false,
};

const designSlice = createSlice({
  name: 'design',
  initialState,
  reducers: {
    getLightTheme: (state) => {
      state.dark = false;
    },
    openModal: (state, { payload }) => {
      state.open = payload;
    },
  },
});

const { reducer, actions } = designSlice;

export const { getLightTheme, openModal } = actions;

export default reducer;
