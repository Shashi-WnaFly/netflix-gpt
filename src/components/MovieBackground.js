import React from "react";
import { useSelector } from "react-redux";
import useMainMovieTrailer from "../hooks/useMainMovieTrailer";

const MovieBackground = () => {
  useMainMovieTrailer();
  const trailer = useSelector((store) => store.movies.MovieVideo);
  return (
    <div className="w-full">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?autoplay=1&mute=1&loop=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieBackground;
