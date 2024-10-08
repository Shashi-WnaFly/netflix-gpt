import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import GPTReducer from "./GPTSearch";
import configReducer from "./ConfigSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies : moviesReducer,
        gpt : GPTReducer,
        config : configReducer,
    },
})

export default appStore;