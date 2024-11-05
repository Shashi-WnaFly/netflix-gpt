import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    NowPlayingMovies: null,
    PopularMovies: null,
    TopRatedMovies: null,
    UpComingMovies: null,
    MovieVideo: null,
    MovieTrailerId: null,
    MovieDetails: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.NowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.UpComingMovies = action.payload;
    },
    addMovieVideo: (state, action) => {
      state.MovieVideo = action.payload;
    },
    changeMovieTrailerId: (state, action) => {
      state.MovieTrailerId = action.payload;
    },
    changeMovieDetails: (state, action) => {
      state.MovieDetails = action.payload;
    }
  },
});

export const {
  addNowPlayingMovies,
  addMovieVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
  changeMovieTrailerId,
  changeMovieDetails,
} = moviesSlice.actions;

export default moviesSlice.reducer;
