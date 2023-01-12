import {createSlice , } from '@reduxjs/toolkit'

const initialState = {
    sel_category: ''
}
const selCategory_Slicer = createSlice({
    name:"selCategory",
    initialState,
    reducers: {
        increment: (state,action)=>{
            state.count = state.count + 1 ;
        },
        setSelectedCategory: (state,action)=>{
            console.log('from redux',action.payload)
            state.sel_category = action.payload;
        }

    },

})
export const {setSelectedCategory} = selCategory_Slicer.actions;
export default selCategory_Slicer.reducer;