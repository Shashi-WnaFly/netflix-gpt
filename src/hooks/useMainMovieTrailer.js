import { useDispatch, useSelector } from "react-redux";
import { addMovieVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMainMovieTrailer = () => {
  const movieID = useSelector((store) => store.movies.MovieTrailerId);
  const dispatch = useDispatch();
  const getData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieID +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterVideos = json?.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterVideos ? filterVideos[0] : json?.results[0];
    dispatch(addMovieVideo(trailer));
  };

  useEffect(() => {
    getData();
  }, [movieID]);
};

export default useMainMovieTrailer;
