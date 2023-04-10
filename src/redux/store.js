import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { userFormReducer } from "./userForm/slice";
import { filterReducer } from "./filterForm/slice";

const rootReducer = combineReducers({
    userForm: userFormReducer,
    filterStatus: filterReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})