import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieDetails = ({ movie_id }) => {
    
    const details = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`, API_OPTIONS);
        const json = await data.json();
        console.log(json);
    }
    
    useEffect(() => {
        if(movie_id) details();
    }, [])

}

export default useMovieDetails;