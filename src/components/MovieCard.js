import { IMG_CDN_LINK } from "../utils/constants"

const MovieCard = ({poster_path}) => {
    return (
        <div className="w-48">
            <img alt="movie loading.." src={IMG_CDN_LINK + poster_path}/>
        </div>
    )
}

export default MovieCard;