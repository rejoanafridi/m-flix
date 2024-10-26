import { IMAGE_URL } from '@/utils/Constant'
import Image from 'next/image'
import Link from 'next/link'
import { BiUpvote } from 'react-icons/bi'
import FavoriteButton from '../FavoriteButton'

interface MovieCardProps {
    movie: any
    className?: string
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, className }) => {
    const { poster_path, vote_average, release_date, title, overview, id } =
        movie ?? {}
    return (
        <div
            className={`min-w-full sm:w-[80%] lg:w-[60%] shadow-md h-[350px] hover:scale-[1.05] transition-all duration-300 overflow-hidden rounded-md relative cursor-pointer group ${className}`}
        >
            {/*  icons  */}
            <div className="absolute top-0 left-0 opacity-100 z-[-1] group-hover:opacity-100 group-hover:z-[1] ease-out transition-all duration-300 flex items-center justify-between w-full p-4">
                <FavoriteButton movie={movie} />

                <div className="flex items-center gap-[5px]">
                    <BiUpvote className="text-purple-700 text-[1.1rem]" />
                    <p className="text-[1rem] text-purple-700">
                        {vote_average}
                    </p>
                </div>
            </div>
            <Link href={`/movies/${id}`}>
                {/*  image  */}
                <Image
                    src={`${IMAGE_URL}${poster_path}`}
                    alt="card"
                    fill
                    className="w-full h-[60%] object-cover group-hover:opacity-40 group-hover:h-full transition-all duration-300 ease-out"
                />

                {/*  texts  */}
                <div className="absolute bottom-0 space-y-2 group-hover:text-purple-600 left-0 text-white py-[20px] pb-[40px] px-[20px] w-full group-hover:bg-black/5">
                    <h3 className="text-[1.4rem] font-bold ">{title}</h3>
                    <p className="text-[0.9rem]  ">{release_date}</p>
                    <p className="text-[0.9rem]  line-clamp-2">{overview}</p>
                </div>
            </Link>
        </div>
    )
}
export default MovieCard
