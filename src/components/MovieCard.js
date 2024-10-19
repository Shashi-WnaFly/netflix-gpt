import useMovieDetails from "../hooks/useMovieDetails"
import { IMG_CDN_LINK } from "../utils/constants"

const MovieCard = ({poster_path, movie_id}) => {

    return (
        <div className=" w-48 shadow-3xl hover:border border-orange-500 hover:shadow-red-700 hover:scale-125 transition-transform duration-300">
            <img alt="movie loading.." src={IMG_CDN_LINK + poster_path}/>
        </div>
    )
}

export default MovieCard;