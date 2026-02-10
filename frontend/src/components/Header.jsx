// Header Component
import CONFIG from '../config/constants.js'
;

import { useState, useEffect } from 'react'

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-3 md:py-4">
                <div className="flex items-center justify-between">
                    <div onClick={() => scrollToSection('hero')} className="cursor-pointer">
                        <img 
                            src={scrolled ? 'public/assets/images/HUB-LOGO-BLANCO-DEGRADADO-COMPRESS.png' : 'public/assets/images/HUB-LOGO-BLANCO-DEGRADADO-COMPRESS.png'}
                            alt="Hub Digital Merida Logo" 
                            className="h-20 md:h-28 lg:h-32 w-auto transition-all duration-300"
                        />
                    </div>
                    <div className="hidden md:flex items-center space-x-2">
                        <div className="flex items-center bg-white/5 shadow-md rounded-lg px-2 py-1">
                            <button onClick={() => scrollToSection('hero')} className={`font-medium transition-colors px-4 py-2 rounded-md hover:text-[#4881EB] ${scrolled ? 'text-[#FFFFFF]' : 'text-white'}`}>Inicio</button>
                            <button onClick={() => scrollToSection('about')} className={`font-medium transition-colors px-4 py-2 rounded-md hover:text-[#4881EB] ${scrolled ? 'text-[#FFFFFF]' : 'text-white'}`}>Nosotros</button>
                            <button onClick={() => scrollToSection('spaces')} className={`font-medium transition-colors px-4 py-2 rounded-md hover:text-[#4881EB] ${scrolled ? 'text-[#FFFFFF]' : 'text-white'}`}>Espacios</button>
                            <button onClick={() => scrollToSection('marketplace')} className={`font-medium transition-colors px-4 py-2 rounded-md hover:text-[#4881EB] ${scrolled ? 'text-[#FFFFFF]' : 'text-white'}`}>Marketplace</button>
                            <button onClick={() => scrollToSection('events')} className={`font-medium transition-colors px-4 py-2 rounded-md hover:text-[#4881EB] ${scrolled ? 'text-[#FFFFFF]' : 'text-white'}`}>Eventos</button>
                            <button onClick={() => scrollToSection('contact')} className={`font-medium transition-colors px-4 py-2 rounded-md hover:text-[#4881EB] ${scrolled ? 'text-[#FFFFFF]' : 'text-white'}`}>Contacto</button>
                        </div>
                        <button onClick={() => scrollToSection('contact')} className="bg-[#4881EB] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#7FD1FF] transition-all transform hover:scale-105 shadow-lg ml-2">Solicitar</button>
                    </div>
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`md:hidden ${scrolled ? 'text-white' : 'text-white'}`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                        </svg>
                    </button>
                </div>
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
                        <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-4 py-2 text-[#000000] hover:bg-[#4881EB] hover:bg-opacity-10">Inicio</button>
                        <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-[#000000] hover:bg-[#4881EB] hover:bg-opacity-10">Nosotros</button>
                        <button onClick={() => scrollToSection('spaces')} className="block w-full text-left px-4 py-2 text-[#000000] hover:bg-[#4881EB] hover:bg-opacity-10">Espacios</button>
                        <button onClick={() => scrollToSection('marketplace')} className="block w-full text-left px-4 py-2 text-[#000000] hover:bg-[#4881EB] hover:bg-opacity-10">Marketplace</button>
                        <button onClick={() => scrollToSection('events')} className="block w-full text-left px-4 py-2 text-[#000000] hover:bg-[#4881EB] hover:bg-opacity-10">Eventos</button>
                        <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-[#000000] hover:bg-[#4881EB] hover:bg-opacity-10">Contacto</button>
                        <div className="px-4 pt-2">
                            <button onClick={() => scrollToSection('contact')} className="w-full bg-[#4881EB] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#7FD1FF] transition-all">
                                Solicitar
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;