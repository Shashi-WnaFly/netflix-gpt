import React from "react";
import { FaPlay } from "react-icons/fa";
import { useSelector } from "react-redux";
import useMovieDetails from "../hooks/useMovieDetails";

const MovieTitle = () => {
  useMovieDetails();
  const details = useSelector((store) => store.movies.MovieDetails);
  if(!details) return;
  const {original_title, overview} = details;

  return (
    <div className=" w-full h-full md:pt-[15%] pt-[60%] md:px-10 px-4 flex flex-col md:gap-6 gap-2 absolute top-0 left-0 text-white bg-gradient-to-r from-black">
      <h1 className=" md:text-5xl text-2xl font-bold">{original_title}</h1>
      <p className="w-1/3 text-gray-200 md:block hidden">{overview}</p>
      <div className="flex md:gap-4 font-semibold md:text-base text-sm">
        <button className=" flex items-center gap-2 md:px-14 md:py-4 px-4 py-1 rounded-lg text-white bg-stone-800 hover:opacity-80">
          <span className="md:text-2xl text-red-600 text-base">
            <FaPlay />
          </span>
          Play
        </button>
        <button className="px-12 py-4 md:block hidden rounded-lg bg-stone-800 text-white hover:opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default MovieTitle;
