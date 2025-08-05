"use client"

import { useState, useEffect } from "react"

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  updated_at: string
}

export function useGitHub(username: string) {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)

        if (!response.ok) {
          throw new Error("Failed to fetch repositories")
        }

        const allRepos: GitHubRepo[] = await response.json()

        // Filter out forks and select only repos with descriptions
        const filteredRepos = allRepos.filter(
          (repo) => !repo.name.includes(".github.io") && repo.description && repo.description.trim() !== "",
        )

        // Shuffle array and take 4 random repos
        const shuffled = [...filteredRepos].sort(() => 0.5 - Math.random())
        const randomRepos = shuffled.slice(0, 4)

        setRepos(randomRepos)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [username])

  return { repos, loading, error }
}
