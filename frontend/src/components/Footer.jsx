import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);
    const sectionRefs = useRef([]);
    const circleRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
    
    const scrollToSection = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    
    // Hub siempre en el centro
    const hubLogo = { name: 'Hub Digital Jalisco', logo: '/assets/images/HUB-LOGO-BLANCO-DEGRADADO-COMPRESS.png', isHub: true };
    
    // 4 aliados estratégicos alrededor (cada uno ocupa 1/4 del círculo)
    const partners = [
        { name: 'EdgeNet', logo: '/assets/images/edgeNetLogoBlanco.png', isHub: false },
        { name: 'FLAI', logo: '/assets/images/flai.png', isHub: false },
        { name: 'Monarch', logo: '/assets/images/LogoMonarchBlanco.png', isHub: false },
        { name: 'Mayia', logo: '/assets/images/mayiaLogoBlanco.png', isHub: false },
    ];

    const handleSectionClick = (index) => {
        if (index === selectedIndex) {
            // Si ya está seleccionado, volver al estado inicial (Hub en centro)
            setSelectedIndex(null);
            gsap.to(circleRef.current, {
                rotation: 0,
                duration: 0.8,
                ease: 'power3.inOut',
            });
        } else {
            // Calcular la rotación necesaria para centrar el elemento seleccionado
            const totalSections = partners.length; // 4 aliados
            const degreesPerSection = 360 / totalSections; // 90 grados cada uno
            const targetRotation = -index * degreesPerSection;
            
            setSelectedIndex(index);
            gsap.to(circleRef.current, {
                rotation: targetRotation,
                duration: 0.8,
                ease: 'power3.inOut',
            });
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade-in para secciones de contenido
            gsap.from(sectionRefs.current, {
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 80%',
                    once: true,
                },
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.08,
                ease: 'power2.out',
            });
        }, footerRef);

        return () => ctx.revert();
    }, []);

    const addToSectionRefs = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    const navLinks = [
        { name: 'Inicio', id: 'hero' },
        { name: 'Nosotros', id: 'about' },
        { name: 'Espacios', id: 'spaces' },
        { name: 'Marketplace', id: 'marketplace' },
        { name: 'Eventos', id: 'events' },
        { name: 'Contacto', id: 'contact' },
    ];

    return (
        <footer ref={footerRef} className="relative bg-black overflow-hidden">
            {/* Video de fondo con opacidad */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                >
                    <source src="/assets/images/jaguar.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
            
            <div className="relative z-10">
                <div className="container mx-auto px-6 py-12 lg:py-16">
                    <div className="max-w-7xl mx-auto">
                        {/* Layout Principal: Contenido (Arriba en mobile) + Menú Circular (Abajo en mobile, Izquierda en desktop) */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
                            
                            {/* CONTENIDO - Primero en mobile, Derecha en desktop */}
                            <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
                                {/* Descripción */}
                                <div ref={addToSectionRefs} className="text-center lg:text-left">
                                    <div className="mb-4 lg:mb-6 flex justify-center lg:justify-start">
                                        <img 
                                            src="/assets/images/HUB-LOGO-BLANCO-DEGRADADO-COMPRESS.png" 
                                            alt="Hub Digital Jalisco" 
                                            className="h-16 md:h-20 lg:h-24 w-auto"
                                        />
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4 lg:mb-6 max-w-xl mx-auto lg:mx-0">
                                        El ecosistema tecnológico más innovador de Jalisco. Impulsando la transformación digital 
                                        con espacios inteligentes, infraestructura de vanguardia y una comunidad vibrante.
                                    </p>
                                    <button 
                                        onClick={() => scrollToSection('contact')}
                                        className="px-8 py-2.5 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-widest font-medium"
                                    >
                                        CONTÁCTANOS
                                    </button>
                                </div>

                                {/* Grid de Links */}
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                                    {/* Navigation */}
                                    <div ref={addToSectionRefs}>
                                        <h3 className="text-white font-semibold mb-3 text-xs tracking-wider uppercase">Navegación</h3>
                                        <ul className="space-y-2">
                                            {navLinks.map((link) => (
                                                <li key={link.id}>
                                                    <button 
                                                        onClick={() => scrollToSection(link.id)}
                                                        className="text-left w-full"
                                                    >
                                                        <span className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                                                            {link.name}
                                                        </span>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Spaces */}
                                    <div ref={addToSectionRefs}>
                                        <h3 className="text-white font-semibold mb-3 text-xs tracking-wider uppercase">Espacios</h3>
                                        <button 
                                            onClick={() => scrollToSection('spaces')}
                                            className="text-left w-full group"
                                        >
                                            <span className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                                                Ver más →
                                            </span>
                                        </button>
                                    </div>

                                    {/* Contact - Destacado */}
                                    <div ref={addToSectionRefs} className="col-span-2 md:col-span-1">
                                        <div className="bg-gradient-to-br from-[var(--secundario)]/10 to-[var(--acento)]/5 border border-[var(--secundario)]/30 rounded-lg p-4 hover:border-[var(--secundario)]/50 transition-all duration-300">
                                            <h3 className="text-[var(--acento)] font-bold mb-3 text-sm tracking-wider uppercase flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                Contacto
                                            </h3>
                                            <div className="space-y-3 text-xs sm:text-sm">
                                                {/* EdgeNet Contact */}
                                                <div className="space-y-1">
                                                    <a 
                                                        href="mailto:anasser@edgenet.mx" 
                                                        className="text-white hover:text-[var(--acento)] block transition-colors duration-200 font-medium break-all"
                                                    >
                                                        anasser@edgenet.mx
                                                    </a>
                                                    <a 
                                                        href="tel:+529991151263" 
                                                        className="text-white hover:text-[var(--acento)] block transition-colors duration-200 font-medium flex items-center gap-1"
                                                    >
                                                        <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                        </svg>
                                                        999 115 1263
                                                    </a>
                                                </div>
                                                {/* Monarch Contact */}
                                                <div className="space-y-1">
                                                    <a 
                                                        href="mailto:soporte@monarch.com.mx" 
                                                        className="text-white hover:text-[var(--acento)] block transition-colors duration-200 font-medium break-all"
                                                    >
                                                        soporte@monarch.com.mx
                                                    </a>
                                                    <a 
                                                        href="tel:+529997573891" 
                                                        className="text-white hover:text-[var(--acento)] block transition-colors duration-200 font-medium flex items-center gap-1"
                                                    >
                                                        <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                        </svg>
                                                        999 757 3891
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* MENÚ CIRCULAR - Segundo en mobile (abajo), Izquierda en desktop */}
                            <div className="flex flex-col items-center justify-center order-2 lg:order-1 lg:sticky lg:top-20">
                                <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
                                    
                                    {/* Contenedor rotatorio */}
                                    <div 
                                        ref={circleRef}
                                        className="absolute inset-0"
                                        style={{ transformOrigin: 'center center' }}
                                    >
                                        {/* Renderizar primero el Hub como parte del círculo cuando algo está seleccionado */}
                                        {selectedIndex !== null && (
                                            <div>
                                                {/* Sección del Hub (1/5 del círculo cuando hay selección) */}
                                                <svg 
                                                    className="absolute inset-0 w-full h-full pointer-events-none"
                                                    viewBox="0 0 450 450"
                                                >
                                                    <path
                                                        d={(() => {
                                                            const totalSections = partners.length + 1; // 5 total (4 aliados + hub)
                                                            const degreesPerSection = 360 / totalSections; // 72 grados
                                                            const hubIndex = partners.length; // El hub será el último en el círculo
                                                            const angle = hubIndex * degreesPerSection - 90;
                                                            
                                                            const sectionStartAngle = angle - degreesPerSection / 2;
                                                            const sectionEndAngle = angle + degreesPerSection / 2;
                                                            
                                                            const outerRadius = 200;
                                                            const innerRadius = 50;
                                                            
                                                            const x1 = 225 + outerRadius * Math.cos(sectionStartAngle * Math.PI / 180);
                                                            const y1 = 225 + outerRadius * Math.sin(sectionStartAngle * Math.PI / 180);
                                                            const x2 = 225 + outerRadius * Math.cos(sectionEndAngle * Math.PI / 180);
                                                            const y2 = 225 + outerRadius * Math.sin(sectionEndAngle * Math.PI / 180);
                                                            const x3 = 225 + innerRadius * Math.cos(sectionEndAngle * Math.PI / 180);
                                                            const y3 = 225 + innerRadius * Math.sin(sectionEndAngle * Math.PI / 180);
                                                            const x4 = 225 + innerRadius * Math.cos(sectionStartAngle * Math.PI / 180);
                                                            const y4 = 225 + innerRadius * Math.sin(sectionStartAngle * Math.PI / 180);
                                                            
                                                            return `M ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 0 0 ${x4} ${y4} Z`;
                                                        })()}
                                                        className="fill-[#0D1B2A]/40 stroke-[var(--secundario)]/30 hover:fill-[#1B263B]/50 hover:stroke-[var(--secundario)]/50 transition-all duration-300 cursor-pointer"
                                                        strokeWidth="2"
                                                        onClick={() => {
                                                            setSelectedIndex(null);
                                                            gsap.to(circleRef.current, {
                                                                rotation: 0,
                                                                duration: 0.8,
                                                                ease: 'power3.inOut',
                                                            });
                                                        }}
                                                        style={{ pointerEvents: 'all' }}
                                                    />
                                                </svg>
                                                
                                                {/* Logo del Hub en el círculo */}
                                                <div
                                                    className="absolute top-1/2 left-1/2 cursor-pointer z-10"
                                                    style={{
                                                        transform: (() => {
                                                            const totalSections = partners.length + 1;
                                                            const degreesPerSection = 360 / totalSections;
                                                            const hubIndex = partners.length;
                                                            const angle = hubIndex * degreesPerSection - 90;
                                                            const radius = window.innerWidth < 640 ? 110 : window.innerWidth < 768 ? 130 : 150;
                                                            const x = radius * Math.cos(angle * Math.PI / 180);
                                                            const y = radius * Math.sin(angle * Math.PI / 180);
                                                            return `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${-angle + 90}deg)`;
                                                        })(),
                                                    }}
                                                    onClick={() => {
                                                        setSelectedIndex(null);
                                                        gsap.to(circleRef.current, {
                                                            rotation: 0,
                                                            duration: 0.8,
                                                            ease: 'power3.inOut',
                                                        });
                                                    }}
                                                >
                                                    <div className="relative group">
                                                        {/* Glow effect */}
                                                        <div className="absolute inset-0 bg-[var(--acento)] rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                                                        
                                                        {/* Logo sin tarjeta - responsive */}
                                                        <img 
                                                            src={hubLogo.logo} 
                                                            alt={hubLogo.name}
                                                            className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_15px_rgba(72,129,235,0.6)]"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        
                                        {/* Aliados */}
                                        {partners.map((partner, index) => {
                                            const totalSections = selectedIndex !== null ? partners.length + 1 : partners.length;
                                            const degreesPerSection = 360 / totalSections;
                                            const angle = index * degreesPerSection - 90;
                                            const isSelected = selectedIndex === index;
                                            const radius = window.innerWidth < 640 ? 110 : window.innerWidth < 768 ? 130 : 150;
                                            
                                            // Calcular posición del logo en el círculo
                                            const x = radius * Math.cos(angle * Math.PI / 180);
                                            const y = radius * Math.sin(angle * Math.PI / 180);
                                            
                                            // Calcular la sección del pastel
                                            const sectionStartAngle = angle - degreesPerSection / 2;
                                            const sectionEndAngle = angle + degreesPerSection / 2;
                                            
                                            const outerRadius = 200;
                                            const innerRadius = 50;
                                            
                                            const x1 = 225 + outerRadius * Math.cos(sectionStartAngle * Math.PI / 180);
                                            const y1 = 225 + outerRadius * Math.sin(sectionStartAngle * Math.PI / 180);
                                            const x2 = 225 + outerRadius * Math.cos(sectionEndAngle * Math.PI / 180);
                                            const y2 = 225 + outerRadius * Math.sin(sectionEndAngle * Math.PI / 180);
                                            const x3 = 225 + innerRadius * Math.cos(sectionEndAngle * Math.PI / 180);
                                            const y3 = 225 + innerRadius * Math.sin(sectionEndAngle * Math.PI / 180);
                                            const x4 = 225 + innerRadius * Math.cos(sectionStartAngle * Math.PI / 180);
                                            const y4 = 225 + innerRadius * Math.sin(sectionStartAngle * Math.PI / 180);
                                            
                                            // Solo mostrar en el círculo si no está seleccionado
                                            if (isSelected) return null;
                                            
                                            return (
                                                <div key={partner.name}>
                                                    {/* Sección del pastel */}
                                                    <svg 
                                                        className="absolute inset-0 w-full h-full pointer-events-none"
                                                        viewBox="0 0 450 450"
                                                    >
                                                        <path
                                                            d={`M ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 0 0 ${x4} ${y4} Z`}
                                                            className="fill-[#0D1B2A]/40 stroke-[var(--secundario)]/30 hover:fill-[#1B263B]/50 hover:stroke-[var(--secundario)]/50 transition-all duration-300 cursor-pointer"
                                                            strokeWidth="2"
                                                            onClick={() => handleSectionClick(index)}
                                                            style={{ pointerEvents: 'all' }}
                                                        />
                                                    </svg>
                                                    
                                                    {/* Logo flotante sin tarjeta - responsive */}
                                                    <div
                                                        className="absolute top-1/2 left-1/2 cursor-pointer z-10"
                                                        style={{
                                                            transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${-angle + 90}deg)`,
                                                        }}
                                                        onClick={() => handleSectionClick(index)}
                                                    >
                                                        <div className="relative group">
                                                            {/* Glow effect */}
                                                            <div className="absolute inset-0 bg-[var(--acento)] rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                                                            
                                                            {/* Logo sin tarjeta - responsive */}
                                                            <img 
                                                                src={partner.logo} 
                                                                alt={partner.name}
                                                                className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_15px_rgba(72,129,235,0.6)]"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Logo Central - Muestra el seleccionado o el Hub */}
                                    <div 
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
                                        onClick={() => {
                                            if (selectedIndex !== null) {
                                                setSelectedIndex(null);
                                                gsap.to(circleRef.current, {
                                                    rotation: 0,
                                                    duration: 0.8,
                                                    ease: 'power3.inOut',
                                                });
                                            }
                                        }}
                                    >
                                        <div className="relative">
                                            {/* Glow effect central - MÁS INTENSO */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--secundario)] via-[#5B95F5] to-[var(--acento)] rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>
                                            
                                            {/* Anillo exterior brillante */}
                                            <div className="absolute inset-0 rounded-full border-2 border-[var(--acento)]/30 blur-sm"></div>
                                            
                                            {/* Círculo contenedor central - responsive */}
                                            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] rounded-full border-4 border-[var(--secundario)]/70 group-hover:border-[var(--acento)] shadow-[0_0_50px_rgba(72,129,235,0.5)] group-hover:shadow-[0_0_70px_rgba(127,209,255,0.7)] flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-105">
                                                {/* Brillo interno */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--secundario)]/10 to-transparent"></div>
                                                
                                                <img 
                                                    src={
                                                        selectedIndex !== null 
                                                            ? partners[selectedIndex].logo 
                                                            : hubLogo.logo
                                                    }
                                                    alt={
                                                        selectedIndex !== null 
                                                            ? partners[selectedIndex].name 
                                                            : hubLogo.name
                                                    }
                                                    className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain transition-all duration-500"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Anillos decorativos de fondo */}
                                    <div className="absolute inset-0 rounded-full border-2 border-[var(--secundario)]/10 opacity-30 pointer-events-none"></div>
                                    <div className="absolute inset-12 rounded-full border border-[var(--acento)]/10 opacity-20 pointer-events-none"></div>
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--secundario)]/5 to-transparent opacity-50 pointer-events-none"></div>
                                </div>

                                {/* Texto descriptivo - responsive */}
                                <div className="mt-6 sm:mt-8 lg:mt-10 text-center transition-all duration-500">
                                    <p className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">
                                        {selectedIndex !== null ? partners[selectedIndex].name : hubLogo.name}
                                    </p>
                                    <p className="text-[var(--acento)] font-semibold text-xs sm:text-sm md:text-base tracking-wider uppercase opacity-90">
                                        {selectedIndex !== null ? 'Aliado Estratégico' : 'Ecosistema Tecnológico'}
                                    </p>
                                    {selectedIndex !== null && (
                                        <button 
                                            onClick={() => {
                                                setSelectedIndex(null);
                                                gsap.to(circleRef.current, {
                                                    rotation: 0,
                                                    duration: 0.8,
                                                    ease: 'power3.inOut',
                                                });
                                            }}
                                            className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 mx-auto"
                                        >
                                            <span>←</span> Volver al Hub
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Bottom section */}
                        <div className="pt-8 border-t border-white border-opacity-10">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                <div className="flex flex-col sm:flex-row items-center gap-3">
                                    <img 
                                        src="/assets/images/hechoMexicoRojo.PNG" 
                                        alt="Hecho en México"
                                        className="h-10 w-auto opacity-70"
                                    />
                                    <p className="text-gray-500 text-xs">
                                        © 2026 Hub Digital Jalisco
                                    </p>
                                </div>
                                
                                {/* Social Icons */}
                                <div className="flex gap-4">
                                    <a 
                                        href="#" 
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                        aria-label="Facebook"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                    </a>
                                    <a 
                                        href="#" 
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                        aria-label="Instagram"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    </a>
                                    <a 
                                        href="#" 
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                        aria-label="LinkedIn"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;