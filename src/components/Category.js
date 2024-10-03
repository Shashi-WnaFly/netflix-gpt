import { useRef } from "react";
import MovieCard from "./MovieCard";
import { useScroll, useTransform, motion } from "framer-motion";

const Category = ({ genre, moviesList }) => {
  const targetRef = useRef(null);
  const {scrollYProgress} = useScroll({target: targetRef})
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"])

  return (
    moviesList && (
        <div className="h-[250vh]" ref={targetRef}>
          <div className=" flex flex-col space-x-4 w-max pl-6 h-[100vh] sticky top-0 items-center justify-start">
          <h1 className="text-2xl py-4 font-semibold text-white">{genre}</h1>
            <motion.div className="flex gap-4" style={{x}}>
              {moviesList.map((movie) => (
                <MovieCard key={movie?.id} poster_path={movie?.poster_path} />
              ))}
            </motion.div>
          </div>
        </div>
    )
  );
};

export default Category;
