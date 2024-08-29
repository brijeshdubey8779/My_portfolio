import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close the menu when a link is clicked
    const closeMenu = () => {
        setIsOpen(false);
    };

    // Sticky Navbar on Scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`p-4 ${isSticky ? 'bg-gray-800 z-50 fixed top-0 left-0 w-full shadow-lg' : 'bg-gray-800'} transition-all duration-300`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">Brijesh Dubey</div>
                <div className="hidden md:flex space-x-6">
                    <a href="#home" className="text-white hover:text-yellow-400 ">Home</a>
                    <a href="#about" className="text-white hover:text-yellow-400">About</a>
                    <a href="#projects" className="text-white hover:text-yellow-400">Projects</a>
                    <a href="#contact" className="text-white hover:text-yellow-400">Contact Me</a>
                </div>
                {/* Hamburger Icon */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <a href="#home" className="block text-white py-2 px-4" onClick={closeMenu}>Home</a>
                <a href="#about" className="block text-white py-2 px-4" onClick={closeMenu}>About</a>
                <a href="#projects" className="block text-white py-2 px-4" onClick={closeMenu}>Projects</a>
                <a href="#contact" className="block text-white py-2 px-4" onClick={closeMenu}>Contact Me</a>
            </div>
        </nav>
    );
};

export default Navbar;
