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
    <div className=" aspect-video pt-[15%] px-10 flex flex-col gap-6 absolute top-0 left-0 text-white bg-gradient-to-r from-black">
      <h1 className=" text-5xl font-bold">{original_title}</h1>
      <p className="w-1/3 text-gray-200">{overview}</p>
      <div className="flex gap-4 font-semibold">
        <button className=" flex items-center gap-2 px-14 py-4 rounded-lg text-white bg-stone-800 hover:opacity-80">
          <span className="text-2xl text-red-600 ">
            <FaPlay />
          </span>
          Play
        </button>
        <button className="px-12 py-4 rounded-lg bg-stone-800 text-white hover:opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default MovieTitle;
