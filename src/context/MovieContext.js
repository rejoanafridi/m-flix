'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie' // Import js-cookie

const MovieContext = createContext('MovieContext')

export const MovieProvider = ({ children }) => {
    const [watchlist, setWatchlist] = useState([])
    const [darkMode, setDarkMode] = useState(false)
    console.log(darkMode)

    useEffect(() => {
        const savedWatchlist =
            JSON.parse(localStorage.getItem('watchlist')) || []
        setWatchlist(savedWatchlist)
        const savedDarkMode = localStorage.getItem('darkMode') === 'true'
        setDarkMode(savedDarkMode)
    }, [])

    const toggleDarkMode = () => {
        setDarkMode((prev) => {
            const newDarkMode = !prev
            localStorage.setItem('darkMode', newDarkMode)
            Cookies.set('darkMode', newDarkMode, { expires: 7 })
            return newDarkMode
        })
    }

    const addToWatchlist = (movie) => {
        // Check if the movie is already in the watchlist
        if (!isMovieInWatchlist(movie?.id)) {
            setWatchlist((prev) => {
                const updatedWatchlist = [...prev, movie]
                localStorage.setItem(
                    'watchlist',
                    JSON.stringify(updatedWatchlist)
                )
                return updatedWatchlist
            })
        }
    }

    const removeFromWatchlist = (movieId) => {
        setWatchlist((prev) => {
            const updatedWatchlist = prev.filter(
                (movie) => movie?.id !== movieId
            )
            localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist))
            return updatedWatchlist
        })
    }

    const isMovieInWatchlist = (movieId) => {
        return watchlist.some((movie) => movie?.id === movieId)
    }

    return (
        <MovieContext.Provider
            value={{
                watchlist,
                addToWatchlist,
                removeFromWatchlist,
                darkMode,
                toggleDarkMode,
                isMovieInWatchlist
            }}
        >
            {children}
        </MovieContext.Provider>
    )
}

export const useMovieContext = () => useContext(MovieContext)
