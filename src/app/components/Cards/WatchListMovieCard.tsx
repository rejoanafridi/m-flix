import { IMAGE_URL } from '@/utils/Constant'
import Image from 'next/image'

interface Movie {
    poster_path: string
    title: string
    id: number
}

interface WatchlistMovieCardProps {
    movie: Movie
    onRemove: (id: number) => void
}

const WatchlistMovieCard: React.FC<WatchlistMovieCardProps> = ({
    movie,
    onRemove
}) => {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <Image
                src={`${IMAGE_URL}${movie.poster_path}`}
                alt={movie.title}
                width={500} // Specify the width
                height={256} // Specify the height
                className="w-full h-64 object-cover"
                sizes="auto"
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-white">
                    {movie.title}
                </h2>
                <button
                    onClick={() => onRemove(movie.id)}
                    className="mt-2 p-1 bg-red-600 text-white rounded"
                >
                    Remove from Watchlist
                </button>
            </div>
        </div>
    )
}

export default WatchlistMovieCard
