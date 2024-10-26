import { FC } from 'react'

interface MobileSidebarProps {
    mobileSidebarOpen: boolean
    setMobileSidebarOpen: (open: boolean) => void
}

const MobileSidebar: FC<MobileSidebarProps> = ({
    mobileSidebarOpen,
    setMobileSidebarOpen
}) => (
    <aside
        className={`${
            mobileSidebarOpen
                ? 'translate-x-0 opacity-100 z-20'
                : 'translate-x-[200px] opacity-0 z-[-1]'
        } lg:hidden bg-white boxShadow p-4 text-center absolute top-[55px] right-0 sm:w-[300px] w-full rounded-md transition-all duration-300`}
    >
        <ul className="items-start gap-[20px] text-[1rem] text-gray-600 flex flex-col">
            text
        </ul>
    </aside>
)

export default MobileSidebar
