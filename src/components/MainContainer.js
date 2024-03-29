import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

    let movies = useSelector(store => store.movies?.nowPlayingMovies?.results);
    console.log(movies);
    if(!movies) return;
    const mainMovie = movies[8];
    const {original_title, overview, id } = mainMovie;
   
    return (
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId = {id}/>
        </div>
    )
}

export default MainContainer