import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieVideo } from "../utils/moviesSlice";

const MovieBackground = (movieId) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movies.MovieVideo);
  const getData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/976573/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterVideos = json?.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterVideos.length
      ? dispatch(addMovieVideo(filterVideos[0]))
      : dispatch(addMovieVideo(json?.results[0]));
    console.log(trailer);
  };

  useEffect(() => {
    getData();
  }, []);
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
