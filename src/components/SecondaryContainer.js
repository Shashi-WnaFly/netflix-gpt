import React from 'react'
import { useSelector } from 'react-redux'
import Category from './Category';
const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);

  return (
    <div className='relative z-20 -mt-44 bg-transparent'>
      <Category genre={"Now Playing"} moviesList={movies?.NowPlayingMovies} />
      <Category genre={"Popular"} moviesList={movies?.PopularMovies} />
      <Category genre={"Top Rated"} moviesList={movies?.TopRatedMovies} />
      <Category genre={"UpComing"} moviesList={movies?.UpComingMovies} />
    </div>
  )
}

export default SecondaryContainer