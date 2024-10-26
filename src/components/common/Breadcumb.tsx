'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

// Define types for props
interface BreadcrumbItem {
    title: string
    href: string
}

interface BreadcrumbsProps {
    items?: BreadcrumbItem[]
    separator?: string
    dynamicItem?: boolean
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
    items,
    separator = '>',
    dynamicItem = false
}) => {
    const pathName = usePathname()
    const [dynamicItems, setDynamicItems] = useState<BreadcrumbItem[]>([]) // Specify state type

    useEffect(() => {
        if (dynamicItem) {
            const segments = pathName.split('/').filter((segment) => segment) // Split and filter empty segments
            const newItems = segments.map((segment, index) => {
                const title = /^[a-zA-Z]+$/.test(segment)
                    ? segment.charAt(0).toUpperCase() + segment.slice(1)
                    : segment // Capitalize if it's a letter
                return {
                    title: title.replace(/-/g, ' '), // Replace dashes with spaces for better readability
                    href: '/' + segments.slice(0, index + 1).join('/') // Create href for each segment
                }
            })
            // Prepend the Home item
            const homeItem: BreadcrumbItem = { title: 'Home', href: '/' }
            setDynamicItems([homeItem, ...newItems])
        }
    }, [pathName, dynamicItem])
    return (
        <nav aria-label="Breadcrumb">
            <ol className="flex items-center">
                {(items ?? dynamicItems)?.map((breadcrumb, index) => (
                    <ListItem
                        key={index}
                        breadcrumb={breadcrumb}
                        separator={separator}
                        index={index}
                        items={items ?? dynamicItems}
                    />
                ))}
            </ol>
        </nav>
    )
}

interface ListItemProps {
    breadcrumb: BreadcrumbItem
    separator: string
    index: number
    items: BreadcrumbItem[]
}

const ListItem: React.FC<ListItemProps> = ({
    breadcrumb,
    separator,
    index,
    items
}) => {
    const [activePath, setActivePath] = useState(false)
    const pathName = usePathname()
    useEffect(() => {
        if (pathName === breadcrumb.href) {
            setActivePath(true)
        }
    }, [pathName])

    return (
        <li className="flex items-center">
            {breadcrumb.href ? (
                <Link
                    href={breadcrumb.href}
                    className={`rounded p-1 transition duration-150 ease-in-out  ${
                        activePath ? 'bg-black-50' : ''
                    } hover:bg-black-50 hover:p-black-900`}
                >
                    <p className="p-xs md:p-sm">{breadcrumb.title}</p>
                </Link>
            ) : (
                <p color="p-purple-700" className="p-xs md:p-sm">
                    {breadcrumb.title}
                </p>
            )}
            {index !== items.length - 1 && (
                <span className="mx-2 p-gray-400">{separator}</span>
            )}
        </li>
    )
}
export default Breadcrumbs
