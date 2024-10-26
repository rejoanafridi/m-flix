'use client'
import { TextButton } from '@/components/ui/Buttons/Button'
import { useMovieContext } from '@/context/MovieContext'
import { useState, useTransition } from 'react'

import { RiHeart3Fill, RiHeart3Line } from 'react-icons/ri'

const FavoriteButton = ({ movie }: any) => {
    const { addToWatchlist, removeFromWatchlist, isMovieInWatchlist }: any =
        useMovieContext()
    const [isPending, startTransition] = useTransition()
    const [active, setActive] = useState(isMovieInWatchlist(movie?.id))

    const handleClick = () => {
        startTransition(() => {
            if (active) {
                removeFromWatchlist(movie?.id)
            } else {
                addToWatchlist(movie)
            }
            setActive((prev: any) => !prev)
        })
    }

    return (
        <>
            <TextButton
                onClick={handleClick}
                className={`z-20 ${isPending ? 'opacity-50' : ''}`}
                disabled={isPending}
            >
                <div
                    className={`flex items-center gap-2 text-black hover:text-purple-700 ${
                        active && 'text-purple-700'
                    }`}
                >
                    {active ? (
                        <RiHeart3Fill className="!size-6" />
                    ) : (
                        <RiHeart3Line className="!size-6" />
                    )}
                    watchlist
                </div>
            </TextButton>
        </>
    )
}

export default FavoriteButton
