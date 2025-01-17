import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const PopularMovies = useSelector((store) => store.movies.PopularMovies);

    const getPopularMovies = async () => {
        const popularMovies = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS);
        const json = await popularMovies.json();
        dispatch(addPopularMovies(json?.results));
    }
    useEffect(() => {
        !PopularMovies && getPopularMovies();
    },[])
}

export default usePopularMovies;