import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "cart",
    initialState: {
        value: null
    },
    reducers: {
        set: (state, action) => {
            console.log('action', action);
            state.value = action.payload
            console.log('state.value', state.value);
        },
        exit: (state) => {
            state.value = null
        } 
    }
})

export const { set, exit } = authSlice.actions

export default authSlice.reducer