import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    // console.log(movies);
    return (
        <div className='px-6'>
            <h1 className='text-white text-3xl py-4'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex'>
                    {
                        movies?.results.map(e => <MovieCard poster_path={e.poster_path} key={e.id}/>)
                    }
                </div>
            </div>

        </div>
    )
}

export default MovieList