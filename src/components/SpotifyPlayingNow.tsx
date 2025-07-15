'use client'
import React, { useState, useEffect } from 'react'
import SongLoadingPlaceholder from './spotify/SongLoadingPlaceholder'
import NothingPlaying from './spotify/NothingPlaying'
import Song from './spotify/Song'

interface PlayingSong {
    name: string,
    title: string,
    albumImageUrl: string,
    artist: string,
    songUrl: string
}
interface NothingPlaying {
    isNothingPlaying: true
}
export default function SpotifyPlayingNow() {

    const [song, setSong] = useState<PlayingSong | NothingPlaying>({ isNothingPlaying: true })
    const [isLoading, setIsLoading] = useState(true)

    const updateNowPlaying = async () => {
        try {
            const res = await fetch('/api/spotify')
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

        const interval = setInterval(updateNowPlaying, 30000)

        return () => clearInterval(interval)
    }, [])

    if (isLoading) return <SongLoadingPlaceholder />
    if ('isNothingPlaying' in song) return <NothingPlaying />
    return <Song song={song} />
}
