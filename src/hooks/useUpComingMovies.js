import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpComingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const UpComingMovies = useSelector((store) => store.movies.UpComingMovies);
  
  const getUpComingMovies = async () => {
    const getMovies = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS);
    const json = await getMovies.json();
    dispatch(addUpComingMovies(json?.results));
  };
  useEffect(() => {
    !UpComingMovies && getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
