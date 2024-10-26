'use client'
import { useMovieContext } from '@/context/MovieContext'
import Navbar from './components/Header'

interface WrapperProps {
    children: React.ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
    const { darkMode }: any = useMovieContext()
    return (
        <div
            className={`w-full  ${
                darkMode ? 'bg-black text-white' : 'bg-white text-black'
            }`}
        >
            <div className="max-w-[1440px] mx-auto pb-5 min-h-screen">
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default Wrapper
