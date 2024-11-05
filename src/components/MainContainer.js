import React from "react";
import MovieTitle from "./MovieTitle";
import { useDispatch, useSelector } from "react-redux";
import MovieBackground from "./MovieBackground";
import { changeMovieTrailerId } from "../utils/moviesSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies?.NowPlayingMovies);
  if (!movies) return;
  const {id} = movies[0];
  dispatch(changeMovieTrailerId(id));
  return (
    <div className="w-screen relative">
      <MovieTitle />
      <MovieBackground />
    </div>
  );
};

export default MainContainer;
