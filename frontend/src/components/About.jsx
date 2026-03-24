import { useEffect, useState, useRef } from 'react'

const About = () => {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    // 🔧 OPT: el video de fondo NO se carga hasta que la sección es visible
    const [sectionVisible, setSectionVisible] = useState(false);
    const sectionRef = useRef(null);
    const backgroundVideoRef = useRef(null);
    const modalVideoRef = useRef(null);

    // 🔧 OPT: un solo observer maneja animación + carga del video de fondo
    // Antes: observer se recreaba cada vez que hasAnimated cambiaba (bug de dependencia)
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasAnimated(true);
                    setSectionVisible(true);
                    observer.disconnect(); // 🔧 OPT: limpia el observer, ya no se necesita
                }
            },
            { threshold: 0.1 } // 🔧 OPT: 0.1 en lugar de 0.2 → el video empieza a cargar antes de ser visible
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []); // 🔧 OPT: [] → el effect corre solo una vez

    // 🔧 OPT: reproducir el video de fondo solo cuando está montado en el DOM
    useEffect(() => {
        if (sectionVisible && backgroundVideoRef.current) {
            backgroundVideoRef.current.play().catch(() => {});
        }
    }, [sectionVisible]);

    // Manejar apertura/cierre del modal + pausa/reanuda videos
    useEffect(() => {
        if (!isVideoModalOpen) return;

        const handleEscape = (e) => {
            if (e.key === 'Escape') setIsVideoModalOpen(false);
        };

        window.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        if (backgroundVideoRef.current) backgroundVideoRef.current.pause();
        if (modalVideoRef.current) {
            modalVideoRef.current.play().catch(err => console.log('Error playing modal video:', err));
        }

        return () => {
            window.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'auto';
            if (backgroundVideoRef.current) {
                backgroundVideoRef.current.play().catch(() => {});
            }
            if (modalVideoRef.current) modalVideoRef.current.pause();
        };
    }, [isVideoModalOpen]);

    const openVideoModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsVideoModalOpen(true);
    };

    const closeVideoModal = (e) => {
        if (e) { e.preventDefault(); e.stopPropagation(); }
        setIsVideoModalOpen(false);
    };

    return (
        <>
            <section
                id="about"
                ref={sectionRef}
                className="py-24 bg-gradient-to-b from-[var(--fondo-secundario)] to-[var(--fondo-principal)]"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">

                        <div className={`text-center mb-16 transition-all duration-1000 ${
                            hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                            <div className="inline-block px-6 py-2 bg-[var(--secundario)]/30 rounded-full mb-6 border-2 border-[var(--acento)]/50">
                                <span className="text-[var(--acento)] font-mono text-sm font-bold tracking-wide uppercase">
                                    ¿Por qué HUB DIGITAL LEÓN?
                                </span>
                            </div>

                            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                                Ubicado en el Corazón <br/>
                                <span className="bg-gradient-to-r from-[var(--secundario)] via-[var(--acento)] to-[var(--secundario)] bg-clip-text text-transparent">
                                    de LEÓN
                                </span>
                            </h2>

                            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed font-normal">
                                Centro de Datos Tier III, Infraestructura de Alto Nivel para los datos de León.
                            </p>
                        </div>

                        {/* Video de fondo — solo se monta cuando la sección es visible */}
                        <div className={`group relative overflow-hidden rounded-2xl shadow-2xl h-[500px] transition-all duration-1000 ${
                            hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: '300ms' }}>

                            {sectionVisible ? (
                                // 🔧 OPT: el <video> de fondo no existe en el DOM hasta que la sección
                                // es visible — evita que el browser descargue el MP4 al cargar la página
                                <video
                                    ref={backgroundVideoRef}
                                    src="/assets/images/videoHubLeon.mp4"
                                    className="w-full h-full object-cover"
                                    loop
                                    muted
                                    playsInline
                                    preload="none"
                                    // 🔧 OPT: preload="none" → no descarga nada hasta play()
                                    // El useEffect de arriba llama play() cuando sectionVisible=true
                                />
                            ) : (
                                // 🔧 OPT: placeholder del mismo tamaño mientras el video no carga
                                // Evita layout shift y da feedback visual inmediato
                                <div className="w-full h-full bg-[var(--fondo-principal)] animate-pulse rounded-2xl" />
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

                            <div className="absolute bottom-8 left-8 z-10">
                                <button
                                    onClick={openVideoModal}
                                    type="button"
                                    className="group/btn relative px-8 py-4 bg-gradient-to-r from-[var(--secundario)] to-[var(--acento)] rounded-full font-bold text-white text-lg tracking-wider uppercase overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[var(--secundario)]/50"
                                >
                                    <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-pulse"></div>
                                    <span className="relative z-10 flex items-center gap-3">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Conoce Más
                                    </span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Modal de Video */}
            <div
                className={`fixed inset-0 flex items-center justify-center p-4 transition-all duration-300 ${
                    isVideoModalOpen ? 'z-[9999] opacity-100 visible' : 'z-[-1] opacity-0 invisible'
                }`}
                style={{ backgroundColor: isVideoModalOpen ? 'rgba(0, 0, 0, 0.9)' : 'transparent' }}
            >
                <div className="absolute inset-0 backdrop-blur-md" onClick={closeVideoModal}></div>

                <div className={`relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl shadow-[var(--secundario)]/30 z-10 transition-transform duration-300 ${
                    isVideoModalOpen ? 'scale-100' : 'scale-75'
                }`}>
                    {/* 🔧 OPT: el video del modal se monta solo cuando se abre — cero descarga en background */}
                    {isVideoModalOpen && (
                        <video
                            ref={modalVideoRef}
                            src="/assets/images/videoHubLeon.mp4"
                            className="w-full h-full object-cover"
                            controls
                            playsInline
                            preload="auto"
                            // 🔧 OPT: preload="auto" solo aquí (modal abierto) → carga rápido cuando el usuario lo pidió
                            autoPlay
                        />
                    )}

                    <button
                        onClick={closeVideoModal}
                        type="button"
                        className="absolute top-4 right-4 z-20 p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50"
                        aria-label="Cerrar"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="absolute inset-0 border-4 border-[var(--secundario)]/30 rounded-2xl pointer-events-none animate-pulse"></div>
                </div>
            </div>
        </>
    );
};

export default About;