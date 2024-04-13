import { createSlice } from "@reduxjs/toolkit";


const menuSlice = createSlice({
    name : "menu",
    initialState:{
        menu : null
    },
    reducers:{
        resMenu:(state,action)=>{
            state.menu = action.payload
        }
    }
})

export const{resMenu} = menuSlice.actions

export default menuSlice.reducer