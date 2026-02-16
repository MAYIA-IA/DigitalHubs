import { useEffect, useState, useRef } from 'react'

const About = () => {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const sectionRef = useRef(null);
    const backgroundVideoRef = useRef(null);
    const modalVideoRef = useRef(null);
    
    // Array de imágenes para el carrusel
    const images = [
        '/assets/images/hubYucatanN1.png',
        '/assets/images/hubYucatanN2.png',
        '/assets/images/hubYucatanN3.png',
        '/assets/images/hubYucatanN4.png',
        '/assets/images/hubYucatanN5.png',
        '/assets/images/hubYucatanN6.png'
    ];

    // Intersection Observer para animar cuando sea visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated]);

    // Efecto para el carrusel automático de imágenes
    useEffect(() => {
        if (!hasAnimated) return;
        
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [hasAnimated, images.length]);

    // Efecto para cerrar modal con tecla ESC y manejar videos
    useEffect(() => {
        if (!isVideoModalOpen) return;

        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                console.log('Cerrando con ESC...');
                setIsVideoModalOpen(false);
            }
        };

        window.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';
        
        // Pausar video de fondo cuando se abre el modal
        if (backgroundVideoRef.current) {
            backgroundVideoRef.current.pause();
        }
        
        // Reproducir video del modal después de un pequeño delay
        const timeoutId = setTimeout(() => {
            if (modalVideoRef.current) {
                modalVideoRef.current.play().catch(err => {
                    console.log('Error playing modal video:', err);
                });
            }
        }, 300);

        return () => {
            window.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'auto';
            clearTimeout(timeoutId);
            
            // Reanudar video de fondo cuando se cierra el modal
            if (backgroundVideoRef.current) {
                backgroundVideoRef.current.play().catch(err => {
                    console.log('Error playing background video:', err);
                });
            }
            
            // Limpiar video del modal
            if (modalVideoRef.current) {
                modalVideoRef.current.pause();
                modalVideoRef.current.currentTime = 0;
            }
        };
    }, [isVideoModalOpen]);

    const openVideoModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Abriendo modal...');
        setIsVideoModalOpen(true);
    };

    const closeVideoModal = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        console.log('Cerrando modal...');
        setIsVideoModalOpen(false);
    };

    return (
        <>
            <section 
                id="about" 
                ref={sectionRef}
                className="py-24 bg-gradient-to-b from-[#0A0A14] to-[#000000]"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        
                        {/* Título y descripción */}
                        <div className={`text-center mb-16 transition-all duration-1000 ${
                            hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                            <div className="inline-block px-6 py-2 bg-[#4881EB]/30 rounded-full mb-6 border-2 border-[#7FD1FF]/50">
                                <span className="text-[#7FD1FF] font-mono text-sm font-bold tracking-wide uppercase">
                                    ¿Por qué HUB DIGITAL MERIDA?
                                </span>
                            </div>
                            
                            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                                Ubicado en el Corazón <br/>
                                <span className="bg-gradient-to-r from-[#4881EB] via-[#7FD1FF] to-[#4881EB] bg-clip-text text-transparent">
                                    de YUCATÁN
                                </span>
                            </h2>
                            
                            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed font-normal">
                                Centro de Datos Tier III, Infraestructura de Alto Nivel para los datos de Yucatán.
                            </p>
                        </div>

                        {/* Grid de imagen y video */}
                        <div className="grid md:grid-cols-2 gap-8 mt-16">
                            
                            {/* Imagen izquierda con carrusel */}
                            <div className={`group relative overflow-hidden rounded-2xl shadow-2xl h-[500px] transition-all duration-1000 ${
                                hasAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                            }`}>
                                {/* Contenedor de imágenes con transición */}
                                <div className="relative w-full h-full">
                                    {images.map((image, index) => (
                                        <img 
                                            key={image}
                                            src={image}
                                            alt={`Hub Digital Mérida - Infraestructura ${index + 1}`}
                                            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                                                index === currentImageIndex 
                                                    ? 'opacity-100' 
                                                    : 'opacity-0'
                                            } brightness-105`}
                                            loading="lazy"
                                        />
                                    ))}
                                </div>
                                
                                <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-black/85 via-black/50 to-transparent"></div>
                                
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                                    <h3 className="text-3xl font-bold mb-4 text-white" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>
                                        Espacios Seguros para tus Servidores
                                    </h3>
                                    
                                    <div className="space-y-3">
                                        <p className="text-white text-lg font-semibold" style={{ textShadow: '0 1px 5px rgba(0,0,0,0.8)' }}>
                                            Redundancia N+1
                                        </p>
                                        
                                        <p className="text-white text-lg font-semibold mb-2" style={{ textShadow: '0 1px 5px rgba(0,0,0,0.8)' }}>
                                            Centro de Ciberseguridad 360°
                                        </p>
                                    </div>
                                    
                                    {/* Indicadores del carrusel */}
                                    <div className="flex justify-center mt-6 space-x-2">
                                        {images.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                                    index === currentImageIndex
                                                        ? 'bg-[#7FD1FF] scale-125'
                                                        : 'bg-white/50 hover:bg-white/80'
                                                }`}
                                                aria-label={`Ver imagen ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Video derecha con botón */}
                            <div className={`group relative overflow-hidden rounded-2xl shadow-2xl h-[500px] transition-all duration-1000 ${
                                hasAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                            }`}
                            style={{ transitionDelay: '300ms' }}>
                                <video 
                                    ref={backgroundVideoRef}
                                    src="/assets/images/videoHubYucatan.mp4"
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="metadata"
                                />
                                
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
                                
                                {/* Botón animado */}
                                <div className="absolute bottom-8 left-8 z-10">
                                    <button 
                                        onClick={openVideoModal}
                                        type="button"
                                        className="group/btn relative px-8 py-4 bg-gradient-to-r from-[#4881EB] to-[#7FD1FF] rounded-full font-bold text-white text-lg tracking-wider uppercase overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#4881EB]/50"
                                    >
                                        <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-pulse"></div>
                                        
                                        <span className="relative z-10 flex items-center gap-3">
                                            <svg 
                                                className="w-6 h-6" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth={2} 
                                                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
                                                />
                                                <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth={2} 
                                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                                                />
                                            </svg>
                                            Conoce Más
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal de Video - SIEMPRE RENDERIZADO */}
            <div 
                className={`fixed inset-0 flex items-center justify-center p-4 transition-all duration-300 ${
                    isVideoModalOpen ? 'z-[9999] opacity-100 visible' : 'z-[-1] opacity-0 invisible'
                }`}
                style={{ backgroundColor: isVideoModalOpen ? 'rgba(0, 0, 0, 0.9)' : 'transparent' }}
            >
                {/* Backdrop */}
                <div 
                    className="absolute inset-0 backdrop-blur-md"
                    onClick={closeVideoModal}
                ></div>
                
                {/* Contenedor del Video */}
                <div className={`relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl shadow-[#4881EB]/30 z-10 transition-transform duration-300 ${
                    isVideoModalOpen ? 'scale-100' : 'scale-75'
                }`}>
                    <video 
                        ref={modalVideoRef}
                        src="/assets/images/videoHubYucatan.mp4"
                        className="w-full h-full object-cover"
                        controls
                        playsInline
                        preload="auto"
                    />
                    
                    <button 
                        onClick={closeVideoModal}
                        type="button"
                        className="absolute top-4 right-4 z-20 p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50"
                        aria-label="Cerrar"
                    >
                        <svg 
                            className="w-6 h-6 text-white" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M6 18L18 6M6 6l12 12" 
                            />
                        </svg>
                    </button>

                    <div className="absolute inset-0 border-4 border-[#4881EB]/30 rounded-2xl pointer-events-none animate-pulse"></div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }

                .animate-scaleIn {
                    animation: scaleIn 0.4s ease-out;
                }
            `}</style>
        </>
    );
};

export default About;