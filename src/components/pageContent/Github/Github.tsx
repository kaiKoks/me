"use client"
import Image from "next/image"
import { useQuery } from "@tanstack/react-query"
import projectDescriptions from "./project-descriptions.json"

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
  const getGithubRepos = async (): Promise<GitHubRepo[]> => {
    const res = await fetch("https://api.github.com/users/Kaikoks/repos")
    if (res.ok) return res.json()
    throw new Error("failed to fetch github repos")
  }
  const {
    data: repos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["repos"],
    queryFn: getGithubRepos,
    staleTime: 600000,
    retry: 1,
  })

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
    <div className="max-w-170 mx-auto p-3">
      <div className="flex items-center justify-center gap-3 mb-5">
        <Image src="icons/github.svg" width={32} height={32} alt="github" className="dark:invert" />
        <div>
          <h2 className="text-2xl font-semibold">GitHub Repositories</h2>
          <p className="opacity-60">My latest projects</p>
        </div>
      </div>
      {isError ? (
        <div className="text-center py-8">
          <p>Failed to fetch.</p>
        </div>
      ) : isLoading ? (
        <div className="flex flex-col gap-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-50/70 mb-2 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg shadow-sm p-6"
            >
              <div className="animate-pulse">
                <div className="flex items-start justify-between mb-3">
                  <div className="h-6 bg-gray-200 dark:bg-neutral-800 rounded w-1/4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-20"></div>
                </div>
                <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-3/4 mb-4"></div>
                <div className="flex gap-2 mb-3">
                  <div className="h-6 bg-gray-200 dark:bg-neutral-800 rounded w-20"></div>
                  <div className="h-6 bg-gray-200 dark:bg-neutral-800 rounded w-16"></div>
                </div>
                <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-1/3"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {repos?.map((repo: GitHubRepo) => {
            const customDescription = (projectDescriptions as Record<string, string>)[repo.name]

            return (
              <div
                key={repo.id}
                className="bg-gray-50/70 mb-2 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg shadow-md hover:shadow-lg hover:border-gray-300 hover:dark:border-gray-700 transition-all duration-200 group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-green-600 dark:group-hover:text-green-500 transition-colors duration-150">
                      {repo.name}
                    </h3>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${repo.name} repository`}
                      className="p-1 transition-colors shrink-0"
                    >
                      <Image src="icons/externalLink.svg" width={16} height={16} alt="link" className="dark:invert" />
                    </a>
                  </div>

                  {customDescription && (
                    <p className="text-lg font-normal opacity-80 mb-4 leading-relaxed">{customDescription}</p>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.language && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-neutral-700/40 text-xs rounded-full opacity-85">
                        <div className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`} />
                        {repo.language}
                      </span>
                    )}
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 border border-gray-300 dark:border-neutral-700 text-xs rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm ">
                    <div className="flex items-center gap-1">
                      <Image src="icons/star.svg" width={14} height={14} alt="star" className="dark:invert" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image src="icons/gitFork.svg" width={14} height={14} alt="git fork" className="dark:invert" />
                      <span>{repo.forks_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image src="icons/calendar.svg" width={14} height={14} alt="calendar" className="dark:invert" />
                      <span>{formatDate(repo.updated_at)}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
