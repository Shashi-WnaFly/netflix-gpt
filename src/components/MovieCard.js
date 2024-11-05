import { IMG_CDN_LINK } from "../utils/constants";
import { useDispatch } from "react-redux";
import { changeMovieTrailerId } from "../utils/moviesSlice";

const MovieCard = ({ poster_path, movieId }) => {
  const dispatch = useDispatch();
  const handleCardClick = () => {
    dispatch(changeMovieTrailerId(movieId));
  };

  return (
    <div
      onClick={handleCardClick}
      className=" w-48 cursor-pointer shadow-3xl hover:border border-orange-500 hover:shadow-red-700 hover:scale-125 transition-transform duration-300"
    >
      <img alt="movie loading.." src={IMG_CDN_LINK + poster_path} />
    </div>
  );
};

export default MovieCard;
