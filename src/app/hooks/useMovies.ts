import { useEffect, useState } from 'react'
import {
    GET_ALL_POPULAR_MOVIES_API,
    GET_SEARCH_MOVIES_API
} from '@/utils/Constant'

const useMovies = (searchQuery: string) => {
    const [movies, setMovies] = useState<unknown[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [hasMore, setHasMore] = useState<boolean>(true)
    const [page, setPage] = useState<number>(1)
    const loadMore = () => {
        setPage((prev) => prev + 1)
    }

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true)
            const response = await fetch(
                searchQuery
                    ? `${GET_SEARCH_MOVIES_API}${
                          searchQuery
                              ? `&query=${searchQuery}&page=${page}`
                              : ''
                      }`
                    : `${GET_ALL_POPULAR_MOVIES_API}&page=${page}`
            )
            const data = await response.json()
            setMovies((prev) =>
                searchQuery ? data.results : [...prev, ...data.results]
            )
            setHasMore(data.page < data.total_pages)
            setLoading(false)
        }

        fetchMovies()
    }, [searchQuery, page])

    return { movies, loading, hasMore, loadMore }
}

export default useMovies
