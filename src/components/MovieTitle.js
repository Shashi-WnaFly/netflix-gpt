import React from "react";

const MovieTitle = ({title, overview}) => {
    return (
        <div className="pt-36 pl-10 flex flex-col gap-2">
            <h1 className=" text-5xl font-bold">{title}</h1>
            <p className="w-1/3">{overview}</p>
            <div className="flex gap-4">
                <button className="px-14 py-4 rounded-lg bg-gray-500 text-white">Play</button>
                <button className="px-12 py-4 rounded-lg bg-gray-500 text-white opacity-45">More Info</button>
            </div>
        </div>
    )
}

export default MovieTitle;