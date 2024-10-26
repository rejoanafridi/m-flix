export const SITE_NAME = 'M-Zone'
const API_KEY = '4691958d2a8a00cf7d246e0da8325a2e'
const API_VERSION = '3'
export const ROOT_API_KEY = `api_key=${API_KEY}`
const ROOT_URL = `https://api.themoviedb.org`
export const ACCESS_TOKEN = 'ACCESS-TOKEN'
const API_URL = `${ROOT_URL}/${API_VERSION}`
export const IMAGE_URL = `https://image.tmdb.org/t/p/w500`
export const GET_SEARCH_MOVIES_API = `${API_URL}/search/movie?${ROOT_API_KEY}`
export const GET_ALL_POPULAR_MOVIES_API = `${API_URL}/movie/popular?${ROOT_API_KEY}`
export const GET_MOVIE_DETAILS_BY_ID_API = `${API_URL}/movie`
export const GET_MOVIE_CREDIT_CAST_BY_ID_API = `${API_URL}/movie/:id/credits?${ROOT_API_KEY}`
export const GET_MOVIE_RECOMMENDATIONS_BY_ID_API = `${API_URL}/movie/:id/recommendations?${ROOT_API_KEY}`
