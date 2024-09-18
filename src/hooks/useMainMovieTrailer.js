import { useDispatch, useSelector } from "react-redux";
import { addMovieVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMainMovieTrailer = () => {
  const dispatch = useDispatch();
  const getData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/365177/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterVideos = json?.results.filter(
      (video) => video.type === "Trailer"
    );
    filterVideos.length
      ? dispatch(addMovieVideo(filterVideos[0]))
      : dispatch(addMovieVideo(json?.results[0]));
  };

  useEffect(() => {
    getData();
  }, []);
};

export default useMainMovieTrailer;
