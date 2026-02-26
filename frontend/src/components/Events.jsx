import { useState, useEffect, useRef } from 'react'
import '../styles/carousel.css'

const Events = () => {
    // =========================================================
    // CONTENIDO POSPUESTO TEMPORALMENTE - descomentar cuando esté listo
    // =========================================================
    /*
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const imageRefs = useRef([]);
    const isAnimating = useRef(false);

    const images = [
        {
            src: "/assets/images/eventos/1.Invitación_general_Gobierno.jpg",
            alt: "Invitación Gobierno",
            color: "#DC2626"
        },
        {
            src: "/assets/images/eventos/1.Invitación_general_HUB.jpg",
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
    */
    // =========================================================
    // FIN CONTENIDO POSPUESTO
    // =========================================================

    return (
        <section id="events" className="py-24 bg-gradient-to-b from-[#0A0A14] to-[#000000] relative overflow-hidden">
            {/* Glow de fondo decorativo */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4881EB] opacity-10 blur-[160px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Header igual al original */}
                    <div className="text-center mb-20">
                        <div className="inline-block px-4 py-2 bg-[#4881EB] bg-opacity-10 rounded-full mb-4">
                            <span className="text-[#7FD1FF] font-mono text-sm">Eventos</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Próximos <span className="gradient-text">Eventos</span>
                        </h2>
                    </div>

                    {/* Placeholder "Próximamente" */}
                    <div className="flex flex-col items-center justify-center text-center py-16 px-4">
                        {/* Ícono / decoración */}
                        <div className="relative mb-8">
                            <div className="w-24 h-24 rounded-full bg-[#4881EB]/10 border border-[#4881EB]/20 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-10 h-10 text-[#7FD1FF]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                </svg>
                            </div>
                            {/* Pulso animado */}
                            <div className="absolute inset-0 w-24 h-24 rounded-full border border-[#4881EB]/30 animate-ping opacity-30" />
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Eventos <span className="gradient-text">Próximamente</span>
                        </h3>
                        <p className="text-white/50 text-base md:text-lg font-light tracking-wide max-w-md">
                            Estamos preparando algo increíble. ¡Estate atento!
                        </p>

                        {/* Puntos decorativos (guiño al estilo del carrusel original) */}
                        <div className="flex justify-center gap-3 mt-12">
                            {[0, 1].map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-2 rounded-full bg-[#4881EB]/30 ${i === 0 ? 'w-12' : 'w-2'}`}
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