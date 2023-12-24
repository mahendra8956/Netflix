import React from 'react'

const VideoTitle = ({title, overview}) => {
    return (
        <div className='pt-[20%] px-20 bg-gradient-to-r from-black absolute text-white aspect-video w-screen'>
            <div >
                <h1 className='text-6xl font-bold'>{title}</h1>
                <p className='py-6 text-lg w-1/4'>{overview}</p>
            </div>
            <div className='mt-5'>
                <button className='bg-white hover:bg-opacity-70 h-11 w-15 text-black p-2 px-7 text-xl rounded-md'> ► Play</button>
                <button className='mx-2 bg-gray-600 h-11 w-15 text-white p-2 px-7 text-xl bg-opacity-50 rounded-md'> ⓘ More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle