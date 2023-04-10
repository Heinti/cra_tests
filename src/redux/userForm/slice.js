import { createSlice } from "@reduxjs/toolkit";

const userInitialState = {
    // по ідеї повиннен бути загальний стан, який буде змінюватись об.єктами внизу, 
    // але братись за сталий буде newUser
  newUser: {
    name: '',
    email: "",
    pass: "",
  },
//   це повинна була бути аналогія редактування + відслідковування цих редагувань, тому логіка трохи цікава... 
  editUser: {
    email: "",
    pass: "",
  },
};

const userFormSlice = createSlice({
    name:'form',
    initialState: userInitialState,
    reducers: {
        addNewUserForm(state, {payload}){
            state.newUser = payload
        },
        editUserForm(state, {payload}){
            state.editUser = payload
            state.newUser.email = payload.email
            state.newUser.pass = payload.pass
        }
    }
})

export const {addNewUserForm, editUserForm} = userFormSlice.actions;
export const userFormReducer = userFormSlice.reducer;