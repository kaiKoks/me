'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
interface GitHubRepo {
    id: number
    name: string
    full_name: string
    description: string | null
    html_url: string
    language: string | null
    stargazers_count: number
    forks_count: number
    updated_at: string
    topics: string[]
    private: boolean
}

export default function Github() {
    const [repos, setRepos] = useState<GitHubRepo[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const getGithubRepos = async () => {
        try {
            setIsLoading(true)
            const res = await fetch('https://api.github.com/users/Kaikoks/repos')
            const data = await res.json()
            setRepos(data.sort((a: GitHubRepo, b: GitHubRepo) => b.stargazers_count - a.stargazers_count))
        } catch (error) {
            console.error('Ошибка при получении данных о репозиториях:', error)
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        getGithubRepos()
    }, [])

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        })
    }

    const getLanguageColor = (language: string | null) => {
        const colors: { [key: string]: string } = {
            JavaScript: "bg-yellow-500",
            TypeScript: "bg-blue-500",
            Python: "bg-green-500",
            Java: "bg-orange-500",
            "C++": "bg-pink-500",
            C: "bg-gray-600",
            HTML: "bg-orange-600",
            CSS: "bg-blue-600",
            React: "bg-cyan-500",
            Vue: "bg-green-600",
            Go: "bg-cyan-600",
            Rust: "bg-orange-700",
            PHP: "bg-purple-500",
        }
        return colors[language || ""] || "bg-gray-500"
    }

    return (
        <div className="w-full max-w-5xl mx-auto p-2 ">
            <div className="flex items-center justify-center gap-3 mb-5">
                <Image src='/icons/github.svg' width={32} height={32} alt='github' className='dark:invert' />
                <div>
                    <h2 className="text-2xl font-semibold ">GitHub Repositories</h2>
                    <p className="opacity-60">My latest projects</p>
                </div>
            </div>

            {isLoading ? (
                <div className="flex gap-3 justify-center flex-wrap">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg shadow-sm min-w-[90%] md:min-w-57  h-35.5 ">
                            <div className="p-6">
                                <div className="animate-pulse">
                                    <div className="h-5 bg-gray-200 dark:bg-neutral-800 rounded w-3/4 mb-3"></div>
                                    <div className="flex gap-2 mb-3">
                                        <div className="h-5 bg-gray-200 dark:bg-neutral-800 rounded w-16"></div>
                                        <div className="h-5 bg-gray-200 dark:bg-neutral-800 rounded w-12"></div>
                                    </div>
                                    <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-1/2"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex gap-3 justify-center flex-wrap">
                    {repos.map((repo) => (
                        <div
                            key={repo.id}
                            className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg shadow-sm hover:shadow-lg hover:border-gray-300 hover:dark:border-gray-700 transition-shadow flex flex-col h-full min-w-[90%] md:min-w-57  w-fit"
                        >
                            <div className="px-6 pt-6 pb-3 flex-1 ">
                                <div className="flex items-start justify-between mb-1">
                                    <h3 className="text-lg text-nowrap font-semibold pr-2 ">{repo.name}</h3>
                                    <a
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Open ${repo.name} repository`}
                                        className="p-1 transition-colors shrink-0"
                                    >
                                        <Image src='/externalLink.svg' width={16} height={16} alt='link' className='dark:invert' />
                                    </a>
                                </div>

                            </div>

                            <div className="px-5 ">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {repo.language && (
                                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-[#222020ce]  text-xs rounded-full opacity-85">
                                            <div className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`} />
                                            {repo.language}
                                        </span>
                                    )}
                                    {repo.topics.slice(0, 2).map((topic) => (
                                        <span key={topic} className="px-2 py-1 border border-gray-300  text-xs rounded-full">
                                            {topic}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between text-sm pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-1">
                                            <Image src='/star.svg' width={12} height={12} alt='star' className='dark:invert' />
                                            <span className=' opacity-85'>{repo.stargazers_count}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Image src='/gitFork.svg' width={12} height={12} alt='git fork' className='dark:invert' />
                                            <span className='opacity-85'>{repo.forks_count}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Image src='/calendar.svg' width={12} height={12} alt='calendar' className='dark:invert' />
                                        <span className='opacity-85'>{formatDate(repo.updated_at)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {!isLoading && repos.length === 0 && (
                <div className="text-center py-8">
                    <p className="">No public repositories found.</p>
                </div>
            )}


        </div>
    )
}
