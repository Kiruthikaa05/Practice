import { createSlice } from '@reduxjs/toolkit'

const initialState = {name : "Vega", age:5 , email: "vega@email.com"}

const userSlice = createSlice( {
    name:"user",
    initialState : { value : initialState},
    reducers:{
        login:(state,action) => {
            state.value = action.payload
        },
        logout:(state) => {
            state.value = initialState;
        }
    }})

    export const {login,logout} = userSlice.actions
export default userSlice.reducer;