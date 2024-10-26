'use client'
import CastMemberCard from '@/app/components/Cards/CastMemberCard'
import MovieCard from '@/app/components/Cards/MovieCard'
import FavoriteButton from '@/app/components/FavoriteButton'

import BackButton from '@/components/common/BackButton'
import { IMAGE_URL } from '@/utils/Constant'
import Image from 'next/image'

// New component for displaying genres
const GenreList = ({ genres }: { genres: any[] }) => (
    <div className="space-y-2">
        <p className="text-purple-800 font-semibold">Genres</p>
        <div className="flex items-center gap-3">
            {genres.map((item: any, index: any) => (
                <div
                    key={index}
                    className="flex h-8 rounded-md p-1 border border-purple-700 text-purple-700"
                >
                    {item?.name}
                </div>
            ))}
        </div>
    </div>
)

// New component for displaying cast members
const CastList = ({ cast }: { cast: any[] }) => (
    <div className="space-y-2">
        <p className="text-purple-800 font-semibold">Casts</p>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 items-stretch gap-3">
            {cast.map((item: any) => (
                <CastMemberCard profile={item} key={item?.id} />
            ))}
        </div>
    </div>
)

// New component for displaying recommended movies
const RecommendationList = ({
    recommendations
}: {
    recommendations: any[]
}) => (
    <div className="space-y-4 mt-5">
        <h2 className="text-3xl text-purple-700 font-semibold ">
            Recommended Movies
        </h2>
        <div className=" flex items-center gap-4 overflow-x-scroll">
            {recommendations.map((movie: any, index: any) => (
                <MovieCard
                    className="!min-w-[250px]"
                    key={`${movie.id}-${index}`}
                    movie={movie}
                />
            ))}
        </div>
    </div>
)

const MovieDetails = ({ data, recommendations, credits }: any) => {
    console.log(data, 'revalidate')
    const { poster_path, overview, genres, release_date } = data ?? {}
    return (
        <div className="p-4 space-y-6">
            <div className="flex items-center justify-between">
                <BackButton />
                <FavoriteButton movie={data} />
            </div>
            <div className="relative w-full h-96">
                <Image
                    src={`${IMAGE_URL}/${poster_path}`}
                    alt={data.title}
                    className="object-cover rounded-lg"
                    fill
                    sizes="auto"
                />
            </div>
            <p className="text-xl">{overview}</p>

            <GenreList genres={genres} />
            <p className="text-xl text-purple-700">
                <span className="font-medium">Release date : </span>{' '}
                {release_date}
            </p>
            <CastList cast={credits?.cast} />
            <RecommendationList recommendations={recommendations} />
        </div>
    )
}

export default MovieDetails
