import MovieCard from "./MovieCard";

const Category = ({ genre, moviesList }) => {
  return (
    moviesList && (
      <div className="px-6">
        <h1 className="text-3xl p-4">{genre}</h1>
        <div className=" overflow-x-scroll">
          <div className=" flex space-x-4 w-max">
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
