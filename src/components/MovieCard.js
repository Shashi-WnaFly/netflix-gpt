import { IMG_CDN_LINK } from "../utils/constants"

const MovieCard = ({poster_path}) => {
    return (
        <div className=" w-48 shadow-3xl hover:border border-red-600 hover:shadow-red-700 hover:scale-125 transition-transform duration-300">
            <img alt="movie loading.." src={IMG_CDN_LINK + poster_path}/>
        </div>
    )
}

export default MovieCard;