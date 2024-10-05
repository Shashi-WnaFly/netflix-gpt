import { createSlice } from "@reduxjs/toolkit";

const GPTSearch = createSlice({
    name : "gpt",
    initialState : {
        GPTSearchView : false,
    },
    reducers : {
        GPTSearchPage : (state) => {
            state.GPTSearchView = !state.GPTSearchView;
        }
    }
})

export const { GPTSearchPage } = GPTSearch.actions;

export default GPTSearch.reducer;