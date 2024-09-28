import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        NowPlayingMovies : null,
        PopularMovies : null,
        MovieVideo : null,
    },
    reducers : {
        addNowPlayingMovies : (state, action) => {
            state.NowPlayingMovies = action.payload;
        },
        addMovieVideo: (state, action) => {
            state.MovieVideo = action.payload;
        },
        addPopularMovies : (state, action) => {
            state.PopularMovies = action.payload;
        }
    }
})

export const { addNowPlayingMovies, addMovieVideo, addPopularMovies } = moviesSlice.actions;

export default moviesSlice.reducer;