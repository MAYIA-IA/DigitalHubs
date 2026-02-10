import { useState, useEffect, useRef } from 'react'
import '../styles/carousel.css'

const Events = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const imageRefs = useRef([]);
    const isAnimating = useRef(false);

    const images = [
        {
            src: "public/assets/images/eventos/1.Invitación_general_Gobierno.jpg",
            alt: "Invitación Gobierno",
            color: "#DC2626"
        },
        {
            src: "public/assets/images/eventos/1.Invitación_general_HUB.jpg",
            alt: "Invitación HUB",
            color: "#4881EB"
        }
    ];

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Actualizar posiciones del carrusel 3D - SIN GSAP, con CSS
    useEffect(() => {
        updateCarouselPositions();
    }, [currentSlide, isMobile]);

    const updateCarouselPositions = () => {
        if (!imageRefs.current.length) return;

        imageRefs.current.forEach((card, index) => {
            if (!card) return;

            const offset = index - currentSlide;
            const isActive = index === currentSlide;

            if (isMobile) {
                card.style.transform = `translateX(${offset * 200}px) translateZ(${isActive ? 0 : -150}px) scale(${isActive ? 1 : 0.8}) rotateY(${isActive ? 0 : offset * -20}deg)`;
                card.style.opacity = isActive ? '1' : '0.5';
                card.style.zIndex = isActive ? '10' : String(5 - Math.abs(offset));
            } else {
                card.style.transform = `translateX(${offset * 280}px) translateZ(${isActive ? 0 : -200}px) scale(${isActive ? 1 : 0.85}) rotateY(${isActive ? 0 : offset * -15}deg)`;
                card.style.opacity = isActive ? '1' : '0.6';
                card.style.zIndex = isActive ? '10' : String(5 - Math.abs(offset));
            }
        });
    };

    const goToSlide = (index) => {
        if (isAnimating.current || index === currentSlide) return;
        
        isAnimating.current = true;
        setCurrentSlide(index);
        
        setTimeout(() => {
            isAnimating.current = false;
        }, 400);
    };

    const nextSlide = () => {
        const next = (currentSlide + 1) % images.length;
        goToSlide(next);
    };

    const prevSlide = () => {
        const prev = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
        goToSlide(prev);
    };

    // Touch handlers
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) nextSlide();
        if (isRightSwipe) prevSlide();

        setTouchStart(0);
        setTouchEnd(0);
    };

    return (
        <section id="events" className="py-24 bg-gradient-to-b from-[#0A0A14] to-[#000000] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-block px-4 py-2 bg-[#4881EB] bg-opacity-10 rounded-full mb-4">
                            <span className="text-[#7FD1FF] font-mono text-sm">Eventos</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Próximos <span className="gradient-text">Eventos</span>
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Contenedor 3D con perspectiva */}
                        <div 
                            className={`relative flex items-center justify-center ${
                                isMobile ? 'h-[500px]' : 'h-[600px]'
                            }`}
                            style={{ 
                                perspective: isMobile ? '1500px' : '2000px',
                                perspectiveOrigin: 'center center'
                            }}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    ref={el => imageRefs.current[index] = el}
                                    onClick={() => goToSlide(index)}
                                    className="absolute cursor-pointer transition-all duration-400 ease-out"
                                    style={{
                                        transformStyle: 'preserve-3d',
                                        width: isMobile ? '320px' : '450px',
                                        willChange: 'transform, opacity'
                                    }}
                                >
                                    {/* Glow effect dinámico */}
                                    <div className="absolute inset-0 pointer-events-none -z-10">
                                        <div 
                                            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 blur-[120px] rounded-full ${
                                                index === currentSlide 
                                                    ? 'opacity-70 w-[500px] h-[500px]' 
                                                    : 'opacity-20 w-[400px] h-[400px]'
                                            }`}
                                            style={{ backgroundColor: image.color }}
                                        ></div>
                                    </div>
                                    
                                    <div className={`relative glass-effect p-3 rounded-2xl overflow-hidden border-2 transition-all duration-700 ${
                                        index === currentSlide 
                                            ? 'border-white/20 shadow-2xl' 
                                            : 'border-white/5'
                                    }`}>
                                        <div className="relative overflow-hidden rounded-xl">
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-auto object-cover"
                                                loading="lazy"
                                            />
                                            
                                            {/* Overlay para tarjetas no activas */}
                                            {index !== currentSlide && (
                                                <div className="absolute inset-0 bg-black/30 transition-opacity duration-500" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Indicador de swipe */}
                        <div className="flex justify-center items-center gap-6 mt-16">
                            <div className="text-white/30 text-sm font-light tracking-[0.3em] uppercase select-none">
                                Deslice horizontalmente
                            </div>
                        </div>

                        {/* Indicadores de puntos */}
                        <div className="flex justify-center gap-3 mt-8">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        index === currentSlide
                                            ? 'bg-[#4881EB] w-12 shadow-lg shadow-[#4881EB]/50'
                                            : 'bg-gray-600/50 w-2 hover:bg-gray-500/70 hover:w-6'
                                    }`}
                                    aria-label={`Ir a slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;