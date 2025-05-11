import { useState } from 'react';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="font-serif text-[#1C120D] px-6 py-6 bg-white shadow fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out">
            <div className="flex justify-between items-center">
                <span className="text-xl font-bold">Zishun Gao</span>

                {/* Menu for large screens (always visible) */}
                <div className="hidden lg:flex space-x-6">
                    <a href="#about" className="px-3">About</a>
                    <a href="#education" className="px-3">Education</a>
                    <a href="#work" className="px-3">Work Experience</a>
                    <a href="#skills" className="px-3">Skills</a>
                    <a href="#projects" className="px-3">Projects</a>
                    <a href="#interests" className="px-3">Interests</a>
                    <a href="#contact" className="px-3">Contact</a>
                    <a
                        href="/ZISHUN_GAO.pdf"
                        download="Zishun_Gao_Resume.pdf"
                        className="px-3 bg-[#E56138] rounded-lg text-[#FAFAF7]"
                    >
                        RESUME
                    </a>
                </div>

                {/* Hamburger Icon for Small Screens */}
                <button
                    className="lg:hidden px-3 py-2 text-xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Dropdown Menu for Small Screens */}
            {isOpen && (
                <div className="flex flex-col lg:hidden mt-4 space-y-4">
                    <a href="#about" className="px-3">About</a>
                    <a href="#education" className="px-3">Education</a>
                    <a href="#work" className="px-3">Work Experience</a>
                    <a href="#skills" className="px-3">Skills</a>
                    <a href="#projects" className="px-3">Projects</a>
                    <a href="#interests" className="px-3">Interests</a>
                    <a href="#contact" className="px-3">Contact</a>
                    <a
                        href="/ZISHUN_GAO.pdf"
                        download="Zishun_Gao_Resume.pdf"
                        className="block w-auto px-3 py-2 bg-[#E56138] rounded-lg text-[#FAFAF7] text-center"
                    >
                        RESUME
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Nav;
