import { createSlice } from "@reduxjs/toolkit";

const gptSlice  = createSlice({
    name: 'gpt',
    initialState: {
        showGpt: false
    },
    reducers: {
        toggleGpt : (state,action) => {
           state.showGpt = !state.showGpt
        }
    }
})

export const {toggleGpt} = gptSlice.actions;
export default gptSlice.reducer;