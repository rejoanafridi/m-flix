import { cookies } from 'next/headers'
import { ACCESS_TOKEN } from './Constant'

export const getSingleDataFetcher = async (
    url,
    options = {},
    requireAuth = false
) => {
    const cookieStore = await cookies()
    const authToken = cookieStore.get(ACCESS_TOKEN)?.value
    const defaultHeaders = {
        'Content-Type': 'application/json',
        ...(requireAuth && authToken
            ? { Authorization: `Bearer ${authToken}` }
            : {})
    }
    console.log(url)
    const response = await fetch(url, {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers
        }
    })

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
}
