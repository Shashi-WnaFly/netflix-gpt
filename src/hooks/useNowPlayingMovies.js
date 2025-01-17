import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const NowPlayingMovies = useSelector((store) => store.movies.NowPlayingMovies);
  
  const getNowPlayingMovies = async function () {
    const now_playing = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const data = await now_playing.json();
    dispatch(addNowPlayingMovies(data?.results));
  };

  useEffect(() => {
    !NowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;