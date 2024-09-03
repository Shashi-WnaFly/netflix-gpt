import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const Browse = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async function () {
    const now_playing = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    )
    const data = await now_playing.json();
    console.log(data?.results);
    dispatch(addNowPlayingMovies(data?.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return <Header />;
};

export default Browse;
