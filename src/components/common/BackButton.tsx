'use client'

import { useRouter } from 'next/navigation'
import { MdKeyboardArrowLeft } from 'react-icons/md'

interface BackButtonProps {
    children?: React.ReactNode
    className?: string
}

const BackButton = ({ children, className }: BackButtonProps) => {
    const router = useRouter()
    const handleClick = () => {
        router.back()
    }
    return (
        <div className={className}>
            <button className="text-purple-700" onClick={handleClick}>
                {children ?? (
                    <p className="flex items-center gap-1">
                        <MdKeyboardArrowLeft className="size-6" /> Back
                    </p>
                )}
            </button>
        </div>
    )
}

export default BackButton
