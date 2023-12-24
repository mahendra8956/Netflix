import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

    let movies = useSelector(store => store.movies?.nowPlayingMovies?.results);
    // console.log(movies);
    let topMovies = [];
    if(typeof movies != "undefined")
    topMovies = movies.slice(0,5);
   
    const [currIndex, setCurrentIndex] = useState(0);

    const handleNext = () =>{
        if(currIndex === topMovies.length-1) setCurrentIndex(0);
        if(currIndex < topMovies.length-1) setCurrentIndex(currIndex+1);
    }
    useEffect(() => {
        let timer = setTimeout(() => {
            handleNext();
        }, 5000)

        return ()=> clearInterval(timer);
    }, [currIndex])
    if(!topMovies) return;
    console.log(topMovies);
    const mainMovie = topMovies?.[currIndex] || {};
    const {original_title, overview, id } = mainMovie;
   
    return (
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId = {id}/>
        </div>
    )
}

export default MainContainer