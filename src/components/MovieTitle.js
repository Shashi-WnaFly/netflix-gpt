import React from "react";

const MovieTitle = ({title, overview}) => {
    return (
        <div className=" w-screen aspect-video pt-[15%] px-10 flex flex-col gap-6 absolute top-0 left-0 text-white bg-gradient-to-r from-black">
            <h1 className=" text-5xl font-bold">{title}</h1>
            <p className="w-1/3 text-gray-200">{overview}</p>
            <div className="flex gap-4 font-semibold">
                <button className="px-14 py-4 rounded-lg bg-white text-black hover:opacity-80">Play</button>
                <button className="px-12 py-4 rounded-lg bg-gray-500 text-white hover:opacity-80">More Info</button>
            </div>
        </div>
    )
}

export default MovieTitle;