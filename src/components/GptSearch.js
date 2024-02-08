import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'
import { HOME_BACKGROUND } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div  className='absolute -z-10'>
            <img src={HOME_BACKGROUND} alt="logo"/>
        </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch