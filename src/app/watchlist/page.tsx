'use client'
import { useMovieContext } from '@/context/MovieContext'
import WatchlistMovieCard from '../components/Cards/WatchListMovieCard'
import BackButton from '@/components/common/BackButton'

const Watchlist = () => {
    const { watchlist, removeFromWatchlist }: any = useMovieContext()

    return (
        <div className="p-4 space-y-6">
            <BackButton />
            <h1 className="text-4xl font-bold text-center text-purple-700">
                Your Watchlist
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {watchlist.map((movie: any, index: any) => (
                    <WatchlistMovieCard
                        key={`${movie.id}-${index}`}
                        movie={movie}
                        onRemove={removeFromWatchlist}
                    />
                ))}
            </div>
        </div>
    )
}

export default Watchlist
