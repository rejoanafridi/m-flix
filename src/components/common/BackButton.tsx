'use client'

import { useRouter } from 'next/navigation'

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
                {children ?? <p>Back</p>}
            </button>
        </div>
    )
}

export default BackButton
