import { useDispatch } from "react-redux";
import { addMovieVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMainMovieTrailer = ({ movieId }) => {
  const dispatch = useDispatch();
  const getData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
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
  }, []);
};

export default useMainMovieTrailer;
