'use client'
import React, { useState, useEffect } from 'react'

export default function SpotifyPlayingNow() {

    const [song, setSong] = useState({ isPlaying: false })
    const [isLoading, setIsLoading] = useState(true)

    const updateNowPlaying = async () => {
        try {
            const res = await fetch('/api/spotify') // Рекомендуется: вынести логику на сервер
            const data = await res.json()
            setSong(data.body)
        } catch (error) {
            console.error('Ошибка при получении данных о треке:', error)
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        updateNowPlaying()

        const interval = setInterval(updateNowPlaying, 10000)

        return () => clearInterval(interval)
    }, [])

    if (song.noContent) return <p>Nothing playing right now</p>
    if (isLoading) return (
        <div className='flex  items-center gap-1.5'>
            <p>Now playing</p>
            <div className='w-50 h-50 bg-gray-600 rounded-4xl'></div>
            <p>Song name</p>
            <p>Artist name</p>

        </div>)

    return (
        <a href={song.songUrl} target='_blank'>
            <p className='text-[#bd0404] text-center'> Now playing </p>

            <div className='flex  items-center gap-1.5'>
                <div style={{ backgroundImage: `url(${song.albumImageUrl})` }} className='bg-cover bg-center bg-no-repeat rounded-4xl w-40 h-40'>
                </div>
                <div>
                    <p className='pl-7 text-[#09b17e] dark:text-[#52ad4e] w-100 text-wrap'> {song.title}</p>
                    <p className='pl-7 text-[#a21ec4] dark:text-[#632cf8]'> {song.artist}</p>
                </div>

            </div>
        </a>
    )
}
