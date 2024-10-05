import { useRef } from "react";
import MovieCard from "./MovieCard";
import { useScroll, useTransform, motion } from "framer-motion";

const Category = ({ genre, moviesList }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    moviesList && (
      <div className="px-4">
        <h1 className="text-2xl py-4 font-semibold text-white ">{genre}</h1>
        <div className="overflow-x-hidden" ref={targetRef}>
          <div className=" flex flex-col space-x-4 w-max pl-6">
            <div className="flex gap-4">
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
