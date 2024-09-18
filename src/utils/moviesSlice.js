import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        NowPlayingMovies : null,
        MovieVideo : null,
    },
    reducers : {
        addNowPlayingMovies : (state, action) => {
            state.NowPlayingMovies = action.payload;
        },
        addMovieVideo: (state, action) => {
            state.MovieVideo = action.payload;
        } 
    }
})

export const { addNowPlayingMovies, addMovieVideo } = moviesSlice.actions;

export default moviesSlice.reducer;