import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { changeMovieDetails } from "../utils/moviesSlice";

const useMovieDetails = () => {
    const movie_id = useSelector((store) => store.movies?.MovieTrailerId);
    const dispatch = useDispatch();
    const details = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`, API_OPTIONS);
        const json = await data.json();
        dispatch(changeMovieDetails(json));
    }
    
    useEffect(() => {
        details();
    }, [movie_id])

}

export default useMovieDetails;