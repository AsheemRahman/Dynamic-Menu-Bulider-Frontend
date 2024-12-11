import { Menu } from 'lucide-react'
import { useState } from "react"
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="bg-customGray shadow h-auto md:h-28">
            <div className="container mx-auto px-4 py-6">

                <div className="hidden md:flex justify-between items-center">
                    <Link to="/">
                        <img src={Logo} className="absolute z-20 w-20 h-20 mt-5" alt="Logo" />
                        <div className="absolute z-20 ms-24 mt-4">
                            <span className="text-4xl font-bold text-blue-500 mr-2">DEEP</span>
                            <span className="text-4xl font-bold text-white">NET</span><br />
                            <span className="text-4xl font-bold text-gray-400">SOFT</span>
                        </div>
                    </Link>
                    <div className="text-white text-xl pt-9">
                        <Link to="/" className="pr-7">HOME</Link>
                        <Link to="/create-menu" className="pr-7">CREATE MENU</Link>
                        <Link to="/" className="pr-7">MAKE A RESERVATION</Link>
                        <Link to="/">CONTACT US</Link>
                    </div>
                </div>

                <div className="md:hidden">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="flex items-center">
                            <img src={Logo} className="w-12 h-12" alt="Logo" />
                            <div className="ml-3">
                                <span className="text-2xl font-bold text-blue-500 mr-1">DEEP</span>
                                <span className="text-2xl font-bold text-white">NET</span>
                                <span className="text-2xl font-bold text-gray-400 block">SOFT</span>
                            </div>
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white p-2"
                            aria-label="Toggle menu"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>

                    {isOpen && (
                        <nav className="mt-4 pb-4">
                            <div className="flex flex-col space-y-4 text-white">
                                <Link to="/" className="text-lg font-medium hover:text-blue-500">HOME</Link>
                                <Link to="/create-menu" className="text-lg font-medium hover:text-blue-500">CREATE MENU</Link>
                                <Link to="/" className="text-lg font-medium hover:text-blue-500">MAKE A RESERVATION</Link>
                                <Link to="/" className="text-lg font-medium hover:text-blue-500">CONTACT US</Link>
                            </div>
                        </nav>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header;