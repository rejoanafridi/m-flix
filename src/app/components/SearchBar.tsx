// Define the props interface
interface SearchBarProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
}

const SearchBar = ({ onChange, value }: SearchBarProps) => {
    return (
        <>
            <div className="w-full  p-4 flex items-center justify-center rounded-full cursor-pointer relative">
                <input
                    onChange={onChange}
                    type="text"
                    value={value}
                    placeholder="Search..."
                    className="border border-[#e5eaf2]  w-full py-2 px-4 text-black outline-none rounded-full"
                />
            </div>
        </>
    )
}

export default SearchBar
