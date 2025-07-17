'use client'
import React from 'react'
import SongLoadingPlaceholder from './spotify/SongLoadingPlaceholder'
import NothingPlaying from './spotify/NothingPlaying'
import Song from './spotify/Song'
import { useQuery } from '@tanstack/react-query'

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

    const updateNowPlaying = async (): Promise<PlayingSong | NothingPlaying> => {
        const res = await fetch('/api/spotify')
        const data = await res.json()
        return data.body
    }
    const {
        data: song,
        isLoading,
        error,
    } = useQuery({ queryKey: ['spotify'], queryFn: updateNowPlaying, refetchInterval: 30000, refetchOnWindowFocus: true, })

    if (isLoading) return <SongLoadingPlaceholder />
    if (typeof song === "undefined" || error || 'isNothingPlaying' in song) return <NothingPlaying />
    return <Song song={song} />
}
