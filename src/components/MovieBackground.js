import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const MovieBackground = (movieId) => {
    const getData = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+{movieId}+'/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        console.log(json);
    }
    useEffect(()=>{
        getData();
    }, [])
    return (
        <div>
            MovieBackground
        </div>
    )
}

export default MovieBackground;