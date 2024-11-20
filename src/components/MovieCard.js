import { IMG_CDN_LINK } from "../utils/constants";
import { useDispatch } from "react-redux";
import { changeMovieTrailerId } from "../utils/moviesSlice";
import { MdOutlineInfo } from "react-icons/md";

const MovieCard = ({ poster_path, movieId }) => {
  const dispatch = useDispatch();
  const handleCardClick = () => {
    dispatch(changeMovieTrailerId(movieId));
  };

  const handleInfoClick = () => {
    
  }

  return (
    <div
      onClick={handleCardClick}
      className="relative w-48 cursor-pointer shadow-3xl hover:border border-orange-500 hover:shadow-red-700 hover:scale-125 transition-transform duration-300"
    >
      <div onClick={handleInfoClick} className="absolute p-1 right-1 top-1 text-white text-xl opacity-85 "><MdOutlineInfo /></div>
      <img alt="movie loading.." src={IMG_CDN_LINK + poster_path} />
    </div>
  );
};

export default MovieCard;
