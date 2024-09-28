import MovieCard from "./MovieCard";

const Category = ({ genre, moviesList }) => {
  return (
    moviesList && (
      <div className="pl-12">
        <h1 className="text-2xl py-4 font-semibold text-white">{genre}</h1>
        <div className="flex overflow-x-scroll">
          <div className=" flex space-x-4 w-max pl-6">
            {moviesList.map((movie) => (
              <MovieCard key={movie?.id} poster_path={movie?.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Category;
