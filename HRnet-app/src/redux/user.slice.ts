import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// defining the different types of the values in a user datas object
export interface User {
  firstname: string;
  lastname: string;
  birthDate: string;
  startDate: string;
  street: string;
  city: string;
  states: any;
  zipCode: number;
  department: string;
}
// the UserDatas variable groups all the users in an array
export type InitialState = {
  UserDatas: User[];
};
// defining the initialState type
const initialState: InitialState = {
  UserDatas: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // this reducer is used to push the new user datas object in the array containing all the users
    // once the user form is correctly submitted
    addUser: (state, { payload }: PayloadAction<User>) => {
      state.UserDatas.push(payload);
    },
  },
});

const { reducer, actions } = userSlice;

export const { addUser } = actions;

export default reducer;
