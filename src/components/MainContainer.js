import React from "react";
import MovieTitle from "./MovieTitle";
import { useSelector } from "react-redux";
import MovieBackground from "./MovieBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.NowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  // console.log(mainMovie);
  const {original_title, overview, id} = mainMovie;
  return (
    <div>
      <MovieTitle title={original_title} overview={overview}/>
      <MovieBackground movieId={id}/>
    </div>
  );
};

export default MainContainer;