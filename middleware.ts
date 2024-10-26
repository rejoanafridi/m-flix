import { NextResponse } from 'next/server'

export function middleware(request: any) {
    const darkMode = request.cookies.get('darkMode')
    console.log('---------->', request)
    const response = NextResponse.next()

    // Set the dark mode preference in the response headers
    response.headers.set('X-Dark-Mode', darkMode ? 'true' : 'false')
    return response
}

export const config = {
    matcher: ['*']
}
