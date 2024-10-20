import MovieCard from "./MovieCard";

const Category = ({ genre, moviesList }) => {
  
  return (
    moviesList && (
      <div className="px-4">
        <h1 className="text-[1.6rem] font-semibold text-white ">{genre}</h1>
        <div className="overflow-y-hidden scroll-smooth scrollbar-hide">
          <div className=" flex flex-col space-x-4 w-max pl-6">
            <div className="flex gap-6 relative py-10">
              {moviesList.map((movie) => (
                <MovieCard key={movie?.id} poster_path={movie?.poster_path} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Category;
