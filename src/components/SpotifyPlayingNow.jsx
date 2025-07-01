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


    if (isLoading) return (
        <div className="block ">
            <div className="bg-gradient-to-br x w-80 h-60 from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                {/* Loading Header */}
                <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-75"></div>
                        <div className="w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-150"></div>
                    </div>
                    <p className="text-blue-500 font-medium text-sm uppercase tracking-wide">Loading</p>
                    <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>

                {/* Loading Content */}
                <div className="flex items-center gap-4">
                    {/* Loading Album Art */}
                    <div className="relative flex-shrink-0">
                        <div className="bg-gray-200 dark:bg-gray-700 rounded-xl w-30 h-30 shadow-md animate-pulse"></div>
                    </div>

                    {/* Loading Song Info */}
                    <div className="flex-1 min-w-0 space-y-2">
                        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
                    </div>
                </div>

                {/* Loading sound waves */}
                <div className="flex items-center justify-center gap-1 mt-4">
                    <div className="w-0.5 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="w-0.5 h-4 bg-blue-400 rounded-full animate-pulse delay-75"></div>
                    <div className="w-0.5 h-2 bg-blue-400 rounded-full animate-pulse delay-150"></div>
                    <div className="w-0.5 h-5 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                    <div className="w-0.5 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                </div>
            </div>
        </div>)

    if (song.noContent) {
        return (
            <div className="block">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                    {/* Not Playing Header */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                        </div>
                        <p className="text-gray-500 font-medium text-sm uppercase tracking-wide">Not Playing</p>
                        <img src='music.png' className='w-4 h-4'></img>

                    </div>

                    {/* Placeholder Content */}
                    <div className="flex items-center gap-4">
                        {/* Placeholder Album Art */}
                        <div className="relative flex-shrink-0">
                            <div className="bg-gray-200 dark:bg-gray-700 rounded-xl w-20 h-20 shadow-md flex items-center justify-center">
                                <img src='music.png' className='w-4 h-4'></img>

                            </div>
                        </div>

                        {/* Placeholder Song Info */}
                        <div className="flex-1 min-w-0">
                            <div className="font-semibold text-gray-400 dark:text-gray-500 text-lg leading-tight mb-1">
                                No song playing
                            </div>
                            <div className="text-gray-400 dark:text-gray-500">Nothing playing right now</div>

                        </div>
                    </div>

                    {/* Static sound waves */}
                    <div className="flex items-center justify-center gap-1 mt-4 opacity-30">
                        <div className="w-0.5 h-2 bg-gray-400 rounded-full"></div>
                        <div className="w-0.5 h-2 bg-gray-400 rounded-full"></div>
                        <div className="w-0.5 h-2 bg-gray-400 rounded-full"></div>
                        <div className="w-0.5 h-2 bg-gray-400 rounded-full"></div>
                        <div className="w-0.5 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <a href={song.songUrl} target='_blank' className='block group min-w-80 '>
            <div className='bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-3 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600'>
                {/* header */}
                <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse delay-75"></div>
                        <div className="w-1 h-1 bg-red-300 rounded-full animate-pulse delay-150"></div>
                    </div>
                    <p className="text-red-500 font-medium text-sm uppercase tracking-wide">Now Playing</p>
                    <img src='music.png' className='w-4 h-4'></img>
                </div>

                <div className="flex items-center  gap-4">
                    {/* Album Art */}
                    <div className="relative flex-shrink-0">
                        <div
                            style={{ backgroundImage: `url(${song.albumImageUrl})` }}
                            className="bg-cover bg-center bg-no-repeat rounded-xl w-30 h-30 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                        </div>
                    </div>

                    {/* Song Info */}
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-lg leading-tight mb-1  group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                            {song.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400  group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                            {song.artist}
                        </p>

                        {/* Subtle link indicator */}
                        <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-xs text-gray-500 dark:text-gray-400">Listen on Spotify</span>
                            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* waves animation */}
                <div className="flex items-center justify-center gap-1 mt-4 opacity-70">
                    <div className="w-0.5 h-3 bg-gradient-to-t from-green-400 to-green-600 rounded-full animate-pulse"></div>
                    <div className="w-0.5 h-4 bg-gradient-to-t from-green-400 to-green-600 rounded-full animate-pulse delay-75"></div>
                    <div className="w-0.5 h-2 bg-gradient-to-t from-green-400 to-green-600 rounded-full animate-pulse delay-150"></div>
                    <div className="w-0.5 h-5 bg-gradient-to-t from-green-400 to-green-600 rounded-full animate-pulse delay-200"></div>
                    <div className="w-0.5 h-3 bg-gradient-to-t from-green-400 to-green-600 rounded-full animate-pulse delay-300"></div>
                </div>
            </div>
        </a>
    )
}
