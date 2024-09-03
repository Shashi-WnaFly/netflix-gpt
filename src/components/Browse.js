import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";

const Browse = () => {
  const movies = async function () {
    const now_playing = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    )
    const data = await now_playing.json();
    console.log(data);
  };

  useEffect(() => {
    movies();
  }, []);

  return <Header />;
};

export default Browse;
