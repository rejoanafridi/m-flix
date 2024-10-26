import Navbar from './components/Header'

interface WrapperProps {
    children: React.ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
    return (
        <div className={`w-full`}>
            <Navbar />
            {children}
        </div>
    )
}

export default Wrapper
