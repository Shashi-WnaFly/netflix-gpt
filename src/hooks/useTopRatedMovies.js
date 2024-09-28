import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants"
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        const getMovies = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTIONS);
        const json = await getMovies.json();
        console.log(json.results)
        dispatch(addTopRatedMovies(json?.results));
    }

    useEffect(() => {
        getTopRatedMovies();
    },[]);
}

export default useTopRatedMovies;