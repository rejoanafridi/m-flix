import { getSingleDataFetcher } from '@/utils/Api'
import { GET_MOVIE_DETAILS_BY_ID_API, ROOT_API_KEY } from '@/utils/Constant'
import MovieDetails from './page'

interface MovieDetailsLayoutProps {
    params: {
        id: string
    }
}

const MovieDetailsLayout = async ({ params }: MovieDetailsLayoutProps) => {
    const { id } = await params

    const data = await getSingleDataFetcher(
        `${GET_MOVIE_DETAILS_BY_ID_API}/${id}?${ROOT_API_KEY}`
    )

    const recommendationsData = await getSingleDataFetcher(
        `${GET_MOVIE_DETAILS_BY_ID_API}/${id}/recommendations?${ROOT_API_KEY}`,
        { revalidate: 60 }
    )
    const castData = await getSingleDataFetcher(
        `${GET_MOVIE_DETAILS_BY_ID_API}/${id}/credits?${ROOT_API_KEY}`
    )

    return (
        <>
            {' '}
            <MovieDetails
                data={data}
                recommendations={recommendationsData.results}
                credits={castData}
            />{' '}
        </>
    )
}

export default MovieDetailsLayout
