import { IMAGE_URL } from '@/utils/Constant'
import Image from 'next/image'

const CastMemberCard = ({ profile }: any) => {
    const {
        profile_path,
        known_for_department,
        original_name,
        popularity,
        character
    } = profile ?? {}
    return (
        <div className="text-center relative bg-white  rounded-md shadow-xl  px-4 py-8 flex items-center justify-center flex-col">
            <div className="relative size-[100px]">
                <Image
                    src={`${IMAGE_URL}${profile_path}`}
                    alt="image"
                    className="rounded-full object-cover"
                    fill
                    sizes="auto"
                />
            </div>

            <h1 className="text-[1.3rem] text-purple-700 font-[500] text-center leading-[24px] mt-4">
                {original_name}
            </h1>
            <p className="text-[0.9rem] text-gray-500 font-[400]">
                {character}
            </p>
            <p className="text-[0.9rem] text-gray-500 font-[400]">
                {known_for_department}
            </p>
            <div className="absolute flex p-1 items-center justify-center bg-purple-700 text-white right-3 top-3 rounded-full size-10 text-xs">
                {popularity}
            </div>
        </div>
    )
}

export default CastMemberCard
