import React from 'react'
import { useSelector } from 'react-redux'
import Category from './Category';
const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);

  return (
    <div>
      <Category genre={"Now Playing"} moviesList={movies?.NowPlayingMovies} />
    </div>
  )
}

export default SecondaryContainer