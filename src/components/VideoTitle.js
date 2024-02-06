import React from 'react'

const VideoTitle = ({title, overview}) => {
    return (
        <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
            <div >
                <h1 className='text-6xl font-bold'>{title}</h1>
                <p className='py-6 text-lg w-1/4'>{overview}</p>
            </div>
            <div className=''>
                <button className='bg-white text-black hover:bg-opacity-80 p-4 px-12 text-xl rounded-md'> ► Play</button>
                <button className='mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 hover:bg-opacity-80 rounded-md'> ⓘ More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle