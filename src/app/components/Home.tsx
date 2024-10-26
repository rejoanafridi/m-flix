'use client'

import MovieCard from './Cards/MovieCard'
import useMovies from '../hooks/useMovies'
import { useSearchQuery } from '../hooks/useSearchQuery'
import SearchBar from './SearchBar'
import { PrimaryButton } from '@/components/ui/Buttons/Button'
const Home = () => {
    const { handleOnChange, searchInput, query } = useSearchQuery({
        initialQuery: '',
        searchAction: () => {},
        searchQuery: () => {}
    })
    const { movies, loading, hasMore, loadMore } = useMovies(query)

    const loadMoreMovies = () => {
        if (hasMore) {
            loadMore()
        }
    }

    return (
        <div>
            <SearchBar value={searchInput} onChange={handleOnChange} />

            <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map((movie: any, index) => (
                    <MovieCard key={`${movie.id}-${index}`} movie={movie} />
                ))}
            </main>
            {loading && <p className="text-center">Loading...</p>}
            {hasMore && !loading && (
                <div className="flex">
                    <PrimaryButton
                        onClick={loadMoreMovies}
                        className=" mx-auto "
                    >
                        Load More
                    </PrimaryButton>
                </div>
            )}
        </div>
    )
}

export default Home
