'use client'
import React, { useState, useEffect } from 'react'

export default function SpotifyPlayingNow() {

    const [song, setSong] = useState({ isPlaying: false })
    const [isLoading, setIsLoading] = useState(true)

    const updateNowPlaying = async () => {
        try {
            const res = await fetch('/api/') // Рекомендуется: вынести логику на сервер
            const data = await res.json()
            setSong(data.body)
        } catch (error) {
            console.error('Ошибка при получении данных о треке:', error)
        } finally {
            setIsLoading(false)
        }
    }
    console.log(song)
    useEffect(() => {
        updateNowPlaying()

        const interval = setInterval(updateNowPlaying, 10000) 

        return () => clearInterval(interval)
    }, [])
    
    
    if (isLoading) return (
        <div className='flex flex-col items-center'>
            <p>Now playing</p>
            <div className='w-50 h-50 bg-gray-600 rounded-4xl'></div>
            <p>Song name</p>
            <p>Artist name</p>

        </div>)
    if (!song.songUrl) return

    return (
        <a href={song.songUrl} target='_blank'>
            <div className='flex flex-col items-center gap-1.5'>
                <p> Now playing:  </p>
                <div style={{ backgroundImage: `url(${song.albumImageUrl})` }} className='bg-cover bg-center bg-no-repeat rounded-4xl w-50 h-50'>
                </div>
                <p className='w-100 text-center '> {song.title}</p>
                <p> {song.artist}</p>
            </div>
        </a>
    )
}
