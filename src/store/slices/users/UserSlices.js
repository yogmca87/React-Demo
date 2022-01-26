import { createSlice } from "@reduxjs/toolkit";



const initialState = [
  {
    id: 1,
    firstname: "Dave Patrick",
    lastname: "dave@gmail.com",
    DOB: "2000-10-02",
    gender: "M",
    department: "2",
    photo: null,
    checkbox: true
  },
  {
    id: 2,
    firstname: "Hank Gluhwein",
    lastname: "hank@gmail.com",
    DOB: "1987-10-01",
    gender: "F",
    department: "3",
    photo: null,
    checkbox: false
  },
];

const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdd: (state, action) => {
      state.push(action.payload)
    },
    userUpdate: (state, action) => {

      const { id, firstname, lastname, DOB, gender, department, photo, checkbox } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.firstname = firstname;
        existingUser.lastname = lastname;
        existingUser.DOB = DOB;
        existingUser.gender = gender;
        existingUser.department = department;
        existingUser.photo = photo;
        existingUser.checkbox = checkbox;
      }

    },
    userDelete: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        return state.filter((user) => user.id !== id);
      }
    }
  }
})
export const { userAdd, userDelete, userUpdate } = UsersSlice.actions
export default UsersSlice.reducer