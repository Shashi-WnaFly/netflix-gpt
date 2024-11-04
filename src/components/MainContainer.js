import React from "react";
import MovieTitle from "./MovieTitle";
import { useDispatch, useSelector } from "react-redux";
import MovieBackground from "./MovieBackground";
import { changeMovieTrailerId } from "../utils/moviesSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies?.NowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  const {original_title, overview, id} = mainMovie;
  dispatch(changeMovieTrailerId(id));
  return (
    <div className="w-screen relative">
      <MovieTitle title={original_title} overview={overview}/>
      <MovieBackground />
    </div>
  );
};

export default MainContainer;
