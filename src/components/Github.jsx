'use client'
import React, { useEffect, useState } from 'react'

export default function Github() {
    const [repos, setRepos] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const getGithubRepos = async () => {
        try {
            const res = await fetch('https://api.github.com/users/Kaikoks/repos')
            const data = await res.json()

            setRepos(data)
        } catch (error) {
            console.error('Ошибка при получении данных о треке:', error)
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        getGithubRepos()
    }, [])
    if (!repos) return
    console.log(repos)
    return (
        <div className='flex justify-center'>
            <ul>
                {Object.keys(repos).map((key, index) => {
                    return (
                        <a href={repos[key].html_url} target='_blank' key={key}>
                            <li>
                                <div>
                                    {repos[key].name}
                                </div>
                            </li>
                        </a>
                    )
                })}
            </ul>
        </div>
    )
}
