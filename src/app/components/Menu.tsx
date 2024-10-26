import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Menu: React.FC = () => {
    const pathName = usePathname() // Initialize router
    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Watchlist', path: '/watchlist' }
    ]

    return (
        <ul className="items-center gap-[20px] text-[1rem] text-[#424242] lg:flex hidden">
            {menuItems.map((item) => (
                <Link key={item.name} href={`${item.path}`}>
                    <li
                        className={`cursor-pointer transition-colors duration-300 ${
                            pathName === item.path
                                ? 'text-purple-700'
                                : 'text-[#424242]'
                        } hover:text-purple-400`}
                    >
                        {item.name}
                    </li>
                </Link>
            ))}
        </ul>
    )
}

export default Menu
