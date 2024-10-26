export const PrimaryButton = ({ props, onClick, className, children }: any) => {
    return (
        <button
            className={`px-6 py-2 border border-purple-700 bg-purple-700 
        text-white hover:bg-white hover:text-primary hover:text-purple-700 transition duration-300 rounded ${className}`}
            onClick={onClick}
            {...props}
        >
            {' '}
            {children}
        </button>
    )
}
export const TextButton = ({ props, onClick, className, children }: any) => {
    return (
        <button
            className={`px-2 py-2 bg-purple-100 transition duration-300 rounded ${className}`}
            onClick={onClick}
            {...props}
        >
            {' '}
            {children}
        </button>
    )
}
