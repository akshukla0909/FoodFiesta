import { createSlice } from "@reduxjs/toolkit";

const categSlices = createSlice({
    name : "category",
    initialState : {
        category : "All"
    },
    reducers : {
        setCateg : (state, action) =>{
            state.category = action.payload;
        }
    }
})

export const {setCateg} = categSlices.actions;

export default categSlices.reducer;