'use client'

import Menu from './Menu'
import { PrimaryButton } from '@/components/ui/Buttons/Button'
import { CiDark } from 'react-icons/ci'
import { useMovieContext } from '@/context/MovieContext'
import Link from 'next/link'
import { MdDarkMode } from 'react-icons/md'

const Navbar: React.FC = () => {
    const { toggleDarkMode, darkMode }: any = useMovieContext()

    return (
        <nav
            className={`flex sticky bg-white shadow-md rounded-md z-50 bg-inherit top-0 items-center justify-between w-full  p-3`}
        >
            <Link href="/">
                <h2 className="font-semibold text-purple-700 text-3xl cursor-pointer">
                    M-Flix
                </h2>
            </Link>
            <Menu />
            <div className="flex items-end gap-4">
                <PrimaryButton>Sign in</PrimaryButton>
                <PrimaryButton onClick={toggleDarkMode}>
                    {darkMode ? (
                        <MdDarkMode className="size-6" />
                    ) : (
                        <CiDark className="size-6" />
                    )}
                </PrimaryButton>
            </div>
        </nav>
    )
}

export default Navbar
