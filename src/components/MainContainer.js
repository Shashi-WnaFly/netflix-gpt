import React from "react";
import MovieTitle from "./MovieTitle";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const MainContainer = () => {
  useNowPlayingMovies();
  const movies = useSelector((store) => store.movies?.NowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  console.log(mainMovie);
  const {original_title, overview} = mainMovie;
  return (
    <div>
      <MovieTitle title={original_title} overview = {overview}/>
      {/* <MovieBackground /> */}
    </div>
  );
};

export default MainContainer;
