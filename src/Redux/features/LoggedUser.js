import {createSlice , } from '@reduxjs/toolkit'

const initialState = {
    count: 0,
    userIsLoggedIn : null,
    logged_user: null
}
const LoggedUserSlicer = createSlice({
    name:"loggedUser",
    initialState,
    reducers: {
        increment: (state,action)=>{
            state.count = state.count + 1 ;
        },
        set_Logged_user: (state,action)=>{
            console.log('from redux',action.payload)
            state.logged_user = action.payload;
        },
        is_user_logged: (state,action)=>{
            console.log('is user logged from redux',action.payload)
            state.userIsLoggedIn = action.payload;
        },

    },

})
export const {set_Logged_user,is_user_logged,increment} = LoggedUserSlicer.actions;
export default LoggedUserSlicer.reducer;