import React from 'react'
import getNowPlaying from '../utils/nowPlaying'
export default async function SpotifyPlayingNow() {
    
    const res = (await getNowPlaying()).body
    console.log(res)

    if (!res) return

    return (
        <div className='flex flex-col items-center'>
            <p> Now playing:  </p>
            <div style={{ backgroundImage: `url(${res.albumImageUrl})` }} className='bg-cover bg-center bg-no-repeat rounded-3xl w-50 h-50'>
            </div>
            <p> {res.title}</p>
            <p> {res.artist}</p>
        </div>
    )
}
