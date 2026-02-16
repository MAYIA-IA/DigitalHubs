import { useState, useRef, useEffect, useMemo, useCallback } from 'react'

const MayiaModule = ({ hoveredModule, moduleId }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showInfoModal, setShowInfoModal] = useState(false);
    const videoRef = useRef(null);
    const jaguarVideoRef = useRef(null);
    
    const calendlyUrl = "https://calendly.com/tu-usuario/cotizacion";
    
    const isHovered = useMemo(() => hoveredModule === moduleId, [hoveredModule, moduleId]);
    
    const handleAgendarCita = useCallback(() => {
        window.open(calendlyUrl, '_blank', 'width=800,height=800');
        setMenuOpen(false);
    }, [calendlyUrl]);
    
    const handleMasInformacion = useCallback(() => {
        setShowInfoModal(true);
        setMenuOpen(false);
    }, []);
    
    const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);
    const closeMenu = useCallback(() => setMenuOpen(false), []);
    const closeModal = useCallback(() => setShowInfoModal(false), []);
    
    const containerStyle = useMemo(() => ({
        borderColor: isHovered ? '#A4D955' : 'rgba(72, 129, 235, 0.1)',
        boxShadow: isHovered ? '0 0 30px rgba(164, 217, 85, 0.3)' : 'none'
    }), [isHovered]);
    
    const videoContainerStyle = useMemo(() => ({
        height: window.innerWidth < 768 ? '220px' : 'auto',
        borderColor: isHovered ? '#A4D955' : 'transparent',
        boxShadow: isHovered ? '0 0 20px rgba(164, 217, 85, 0.5), inset 0 0 20px rgba(164, 217, 85, 0.1)' : 'none'
    }), [isHovered]);
    
    // Reproducir videos automáticamente - OPTIMIZADO
    useEffect(() => {
        const playVideos = async () => {
            try {
                if (videoRef.current) {
                    await videoRef.current.play();
                }
                if (jaguarVideoRef.current) {
                    await jaguarVideoRef.current.play();
                }
            } catch (error) {
                console.log("Autoplay requiere interacción del usuario");
            }
        };
        
        playVideos();
        
        return () => {
            if (videoRef.current) videoRef.current.pause();
            if (jaguarVideoRef.current) jaguarVideoRef.current.pause();
        };
    }, []);

    return (
        <div 
            className="relative w-full h-full bg-[#0A0A14] rounded-3xl overflow-hidden border-2 transition-[border-color,box-shadow] duration-300"
            style={containerStyle}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 pb-3 md:pb-4">
                <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-[#060606] flex items-center justify-center overflow-hidden w-12 h-12">
                        <video 
                            ref={jaguarVideoRef}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            className="w-full h-full object-cover"
                        >
                            <source src="/assets/images/jaguar.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">MAYIA</h3>
                        <p className="text-sm text-gray-400">IA Para Empresas</p>
                    </div>
                </div>
                
                <div className="relative z-10">
                    <button 
                        onClick={toggleMenu}
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Abrir menú"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <circle cx="10" cy="5" r="1.5"/>
                            <circle cx="10" cy="10" r="1.5"/>
                            <circle cx="10" cy="15" r="1.5"/>
                        </svg>
                    </button>
                    
                    {menuOpen && (
                        <>
                            <div className="fixed inset-0 z-30" onClick={closeMenu} aria-hidden="true"/>
                            <div className="absolute right-0 top-8 bg-[#1A1A2E] rounded-lg shadow-xl border border-[#4881EB]/20 overflow-hidden z-40 min-w-[200px]">
                                <button 
                                    onClick={handleAgendarCita}
                                    className="w-full px-4 py-3 text-left text-sm text-white hover:bg-[#4881EB]/20 transition-colors flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Agendar cita para cotización
                                </button>
                                <button 
                                    onClick={handleMasInformacion}
                                    className="w-full px-4 py-3 text-left text-sm text-white hover:bg-[#4881EB]/20 transition-colors flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Más información
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Video Area */}
            <div 
                className="relative mx-4 md:mx-6 mb-3 md:mb-4 rounded-2xl overflow-hidden border-2 transition-[border-color,box-shadow] duration-300" 
                style={videoContainerStyle}
            >
                <video 
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover block"
                >
                    <source src="/assets/images/productos/mabePanel.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Stats - 3 superiores - OPTIMIZADO Y CORREGIDO */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-3 px-3 sm:px-4 md:px-6 mb-2 md:mb-3">
                <div className="bg-gradient-to-br from-[#1A1A2E] to-[#0A0A14] rounded-xl p-2 sm:p-3 md:p-4 border border-[#4881EB]/20 hover:border-[#A4D955]/50 transition-colors duration-300 min-w-0">
                    <p className="text-[9px] sm:text-[10px] md:text-xs font-bold text-[#A4D955] mb-0.5 sm:mb-1 text-center leading-tight">
                        FÁBRICA IA
                    </p>
                    <p className="text-[7px] sm:text-[8px] md:text-[10px] text-gray-300 text-center leading-tight">
                        Privada para
                    </p>
                    <p className="text-[7px] sm:text-[8px] md:text-[10px] text-gray-300 text-center leading-tight">
                        tu empresa
                    </p>
                </div>

                <div className="bg-gradient-to-br from-[#1A1A2E] to-[#0A0A14] rounded-xl p-2 sm:p-3 md:p-4 border border-[#4881EB]/20 hover:border-[#A4D955]/50 transition-colors duration-300 min-w-0">
                    <p className="text-[9px] sm:text-[10px] md:text-xs font-bold text-[#A4D955] mb-0.5 sm:mb-1 text-center leading-tight">
                        CONSULTORÍA
                    </p>
                    <p className="text-[7px] sm:text-[8px] md:text-[10px] text-gray-300 text-center leading-tight">
                        Modelo
                    </p>
                    <p className="text-[7px] sm:text-[8px] md:text-[10px] text-gray-300 text-center leading-tight">
                        StrategyOps
                    </p>
                </div>

                <div className="bg-gradient-to-br from-[#1A1A2E] to-[#0A0A14] rounded-xl p-2 sm:p-3 md:p-4 border border-[#4881EB]/20 hover:border-[#A4D955]/50 transition-colors duration-300 min-w-0">
                    <p className="text-[9px] sm:text-[10px] md:text-xs font-bold text-[#A4D955] mb-0.5 sm:mb-1 text-center leading-tight">
                        LABORATORIO
                    </p>
                    <p className="text-[7px] sm:text-[8px] md:text-[10px] text-gray-300 text-center leading-tight">
                        Pruebas de
                    </p>
                    <p className="text-[7px] sm:text-[8px] md:text-[10px] text-gray-300 text-center leading-tight">
                        concepto
                    </p>
                </div>
            </div>

            {/* Stat 4 - Horizontal completa */}
            <div className="px-3 sm:px-4 md:px-6 pb-3 md:pb-6">
                <div className="bg-gradient-to-r from-[#4881EB]/20 via-[#A4D955]/20 to-[#4881EB]/20 rounded-xl p-3 sm:p-4 md:p-5 border-2 border-[#A4D955]/30 hover:border-[#A4D955]/70 transition-colors duration-300">
                    <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-white text-center mb-0.5 sm:mb-1 leading-tight">
                        PLATAFORMAS DE IA
                    </p>
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-300 text-center font-medium leading-tight">
                        PERSONALIZADAS
                    </p>
                </div>
            </div>

            {/* Modal de Información */}
            {showInfoModal && (
                <div 
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4" 
                    onClick={closeModal}
                >
                    <div 
                        className="bg-[#1A1A2E] rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border-2 border-[#A4D955]/30 shadow-2xl" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="sticky top-0 bg-gradient-to-r from-[#A4D955] to-[#4881EB] p-6 flex items-center justify-between z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-[#060606] flex items-center justify-center overflow-hidden">
                                    <video 
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover"
                                    >
                                        <source src="/assets/images/jaguar.mp4" type="video/mp4" />
                                    </video>
                                </div>
                                <h2 className="text-2xl font-bold text-white">MAYIA</h2>
                            </div>
                            <button 
                                onClick={closeModal}
                                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                                aria-label="Cerrar"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            <div>
                                <p className="text-gray-300 leading-relaxed">
                                    <span className="font-bold text-[#A4D955]">MAYIA</span> es tu aliado en inteligencia artificial empresarial, ofreciendo soluciones personalizadas desde la consultoría hasta la implementación completa.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    {
                                        title: 'Fábrica de IA Privada',
                                        text: 'Infraestructura dedicada exclusivamente para tu empresa, garantizando privacidad y control total.'
                                    },
                                    {
                                        title: 'Consultoría Estratégica',
                                        text: 'Modelo StrategyOps para transformar tu negocio con inteligencia artificial de manera efectiva.'
                                    },
                                    {
                                        title: 'Laboratorio de Innovación',
                                        text: 'Espacio para pruebas de concepto y desarrollo de soluciones personalizadas antes de la implementación.'
                                    },
                                    {
                                        title: 'Plataformas Personalizadas',
                                        text: 'Desarrollo de soluciones de IA adaptadas específicamente a las necesidades de tu industria.'
                                    }
                                ].map((feature, idx) => (
                                    <div key={idx} className="bg-[#0A0A14] rounded-xl p-4 border border-[#A4D955]/20">
                                        <h3 className="text-[#A4D955] font-semibold mb-2">{feature.title}</h3>
                                        <p className="text-gray-300 text-sm">{feature.text}</p>
                                    </div>
                                ))}
                            </div>

                            <button 
                                onClick={() => {
                                    closeModal();
                                    handleAgendarCita();
                                }}
                                className="w-full bg-gradient-to-r from-[#A4D955] to-[#4881EB] text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 will-change-transform"
                            >
                                Agendar Cotización
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MayiaModule;