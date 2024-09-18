import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieVideo } from "../utils/moviesSlice";
import useMainMovieTrailer from "../hooks/useMainMovieTrailer";

const MovieBackground = (movieId) => {
    useMainMovieTrailer();
    const trailer = useSelector(store => store.movies.MovieVideo);
  
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailer?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default MovieBackground;
