import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const currentLnag = useSelector(store=>store.lang.lang);
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12'>
            <input type='text' placeholder={lang?.[currentLnag].placeHolder} className='p-4 m-4 col-span-9'/>
            <button className='bg-red-700 rounded-lg text-white px-4 py-2 col-span-3 m-4'>{lang?.[currentLnag].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar