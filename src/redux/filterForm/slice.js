import { createSlice } from "@reduxjs/toolkit";
import { statusForm } from "./constants";

const statusInitialState = {
    status: statusForm.new,
}

const filterSlice = createSlice({
    name: "filter",
    initialState: statusInitialState,
    reducers:{
        setStatusFilter(state, {payload}){
            state.status = payload
        }
    }
})

export const {setStatusFilter} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;