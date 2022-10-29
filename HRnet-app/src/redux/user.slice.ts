import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  firstname: string;
  lastname: string;
  birthDate: string;
  startDate: string;
  street: string;
  city: string;
  states: string;
  zipCode: string;
  department: string;
}

type InitialState = {
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
