import { useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

export const useSearchQuery = ({
    initialQuery = '',
    delay = 500,
    searchAction,
    searchQuery,
    size = 10
}) => {
    const [searchInput, setSearchInput] = useState(initialQuery)
    const [query, setQuery] = useState(initialQuery)
    const [initialLoad, setInitialLoad] = useState(false)

    const debouncedSearch = useDebouncedCallback((value) => {
        setQuery(value)
    }, delay)

    const handleOnChange = (e) => {
        setSearchInput(e.target.value)
        debouncedSearch(e.target.value)
    }

    const handleCancel = () => {
        setSearchInput('')
        setQuery('')
    }
    useEffect(() => {
        setInitialLoad(true)
    }, [])

    const searchParams = { [searchQuery]: query, size: size }
    useEffect(() => {
        if (query) {
            searchAction && searchAction(searchParams)
        }
        if (!query && initialLoad) {
            searchAction && searchAction()
        }
    }, [query])
    return {
        searchInput,
        query,
        handleOnChange,
        handleCancel,
        initialLoad
    }
}
