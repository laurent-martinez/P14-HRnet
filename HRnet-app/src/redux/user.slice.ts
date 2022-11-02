import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  birthDate: Date;
  startDate: Date;
  street: string;
  city: string;
  states: string;
  zipCode: number;
  department: string;
}

export type InitialState = {
  UserDatas: User[];
};

const initialState: InitialState = {
  UserDatas: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, { payload }: PayloadAction<User>) => {
      state.UserDatas.push(payload);
    },
  },
});

const { reducer, actions } = userSlice;

export const { addUser } = actions;

export default reducer;
