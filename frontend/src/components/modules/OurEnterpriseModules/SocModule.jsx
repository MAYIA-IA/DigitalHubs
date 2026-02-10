import { useState, useMemo, useCallback, useRef } from 'react'

const SocModule = ({ hoveredModule, moduleId }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showInfoModal, setShowInfoModal] = useState(false);
    const closeTimeoutRef = useRef(null);
    
    const calendlyUrl = "https://calendly.com/tu-usuario/cotizacion";
    
    const features = [
        "CACERÍA DE AMENAZAS",
        "INTELIGENCIA DE AMENAZAS",
        "EVALUACIÓN DE RIESGOS",
        "ESTRATEGIA Y GOBIERNO DE CIBERSEGURIDAD",
        "GESTIÓN DE RESPUESTAS Y CONTENCIÓN DE INCIDENTES"
    ];
    
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
    
    const handleMouseEnter = useCallback(() => {
        // Cancelar cualquier cierre pendiente
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
    }, []);
    
    const handleMouseLeave = useCallback(() => {
        // Esperar 200ms antes de cerrar
        closeTimeoutRef.current = setTimeout(() => {
            setMenuOpen(false);
        }, 200);
    }, []);
    
    const closeModal = useCallback(() => setShowInfoModal(false), []);
    
    const containerStyle = useMemo(() => ({
        borderColor: isHovered ? '#4881EB' : 'rgba(72, 129, 235, 0.1)',
        boxShadow: isHovered ? '0 0 30px rgba(72, 129, 235, 0.3)' : 'none'
    }), [isHovered]);
    
    const videoContainerStyle = useMemo(() => ({
        borderColor: isHovered ? '#4881EB' : 'transparent',
        boxShadow: isHovered ? '0 0 20px rgba(72, 129, 235, 0.5), inset 0 0 20px rgba(72, 129, 235, 0.1)' : 'none'
    }), [isHovered]);
    
    return (
        <div 
            className="relative w-full h-full bg-[#0A0A14] rounded-3xl overflow-hidden border-2 transition-[border-color,box-shadow] duration-300"
            style={containerStyle}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-4 relative z-20">
                <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-white flex items-center justify-center p-2.5">
                        <img 
                            src="/assets/images/productos/cyberpeaceLogo.png" 
                            alt="CyberPeace SOC" 
                            className="w-7 h-7 object-contain"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">CyberPeace SOC</h3>
                        <p className="text-sm text-gray-400">Ciberseguridad 360°</p>
                    </div>
                </div>
                
                {/* Contenedor del menú con handlers mejorados */}
                <div 
                    className="relative z-30"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <button 
                        onClick={toggleMenu}
                        className="text-gray-400 hover:text-white transition-colors relative z-30"
                        aria-label="Abrir menú"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <circle cx="10" cy="5" r="1.5"/>
                            <circle cx="10" cy="10" r="1.5"/>
                            <circle cx="10" cy="15" r="1.5"/>
                        </svg>
                    </button>
                    
                    {menuOpen && (
                        <div 
                            className="absolute right-0 top-8 bg-[#1A1A2E] rounded-lg shadow-xl border border-[#4881EB]/20 overflow-hidden z-40 min-w-[200px]"
                        >
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
                    )}
                </div>
            </div>

            {/* Image Area con Features Overlay */}
            <div 
                className="relative mx-6 mb-4 rounded-2xl overflow-hidden border-2 transition-[border-color,box-shadow] duration-300" 
                style={videoContainerStyle}
            >
                <video 
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-auto block"
                >
                    <source src="/assets/images/productos/cyberpeaceVid.mp4" type="video/mp4" />
                </video>
                
                {/* Features Overlay */}
                <div className="absolute top-2 md:top-4 left-2 md:left-4 flex flex-col gap-1 md:gap-2 z-10 max-w-[70%] md:max-w-[80%]">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="px-2 py-1 md:px-3 md:py-1.5 bg-[#4881EB]/80 backdrop-blur-sm rounded-md md:rounded-lg border border-[#7FD1FF]/50 hover:bg-[#4881EB]/90 transition-colors duration-300 cursor-default"
                        >
                            <p className="text-[7px] md:text-[10px] font-bold text-white leading-tight">
                                {feature}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats - Certificaciones principales */}
            <div className="flex justify-around px-6 pb-6">
                <div className="text-center">
                    <p className="text-base font-bold text-white mb-1 hover:text-[#4881EB] transition-colors cursor-default">FIRST</p>
                    <p className="text-xs text-gray-400 hover:text-white transition-colors cursor-default">Miembro</p>
                </div>
                <div className="text-center">
                    <p className="text-base font-bold text-[#4881EB] mb-1 hover:text-white transition-colors cursor-default">ISO 27001</p>
                    <p className="text-xs text-gray-400 hover:text-white transition-colors cursor-default">Gestión de Seguridad</p>
                </div>
                <div className="text-center">
                    <p className="text-base font-bold text-[#4881EB] mb-1 hover:text-white transition-colors cursor-default">ISO 42001</p>
                    <p className="text-xs text-gray-400 hover:text-white transition-colors cursor-default">Gestión de IA</p>
                </div>
                <div className="text-center">
                    <p className="text-base font-bold text-[#00BFA5] mb-1 hover:text-white transition-colors cursor-default">24/7</p>
                    <p className="text-xs text-gray-400 hover:text-white transition-colors cursor-default">Monitoreo</p>
                </div>
            </div>

            {/* Certificaciones adicionales */}
            <div className="px-6 pb-4">
                <div className="bg-gradient-to-br from-[#1A1A2E] to-[#0F0F1E] rounded-xl p-4 border-2 border-[#4881EB]/30 hover:border-[#4881EB]/50 transition-colors duration-300">
                    <p className="text-sm font-bold text-[#7FD1FF] text-center mb-3 tracking-wide">Certificaciones Adicionales</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {['ISO 27034', 'ISO 27017', 'ISO 9001', 'ISO 37001', 'ISO 27018'].map((cert) => (
                            <span 
                                key={cert}
                                className="text-xs font-semibold px-3 py-1.5 bg-gradient-to-r from-[#4881EB]/30 to-[#7FD1FF]/20 text-white rounded-full border border-[#4881EB]/50 hover:scale-105 hover:border-[#7FD1FF] transition-all duration-200 cursor-default will-change-transform"
                            >
                                {cert}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal de Información */}
            {showInfoModal && (
                <div 
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4" 
                    onClick={closeModal}
                >
                    <div 
                        className="bg-[#1A1A2E] rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border-2 border-[#4881EB]/30 shadow-2xl" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="sticky top-0 bg-gradient-to-r from-[#4881EB] to-[#7FD1FF] p-6 flex items-center justify-between z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-2">
                                    <img 
                                        src="/assets/images/productos/cyberpeaceLogo.png" 
                                        alt="CyberPeace SOC" 
                                        className="w-full h-full object-contain"
                                        loading="lazy"
                                    />
                                </div>
                                <h2 className="text-2xl font-bold text-white">CyberPeace SOC</h2>
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
                                    <span className="font-bold text-[#4881EB]">CyberPeace SOC</span> ofrece ciberseguridad integral 360° con monitoreo continuo 24/7 y las certificaciones internacionales más exigentes.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="bg-[#0A0A14] rounded-xl p-4 border border-[#4881EB]/20">
                                        <p className="text-[#4881EB] font-semibold">{feature}</p>
                                    </div>
                                ))}
                            </div>

                            <button 
                                onClick={() => {
                                    closeModal();
                                    handleAgendarCita();
                                }}
                                className="w-full bg-gradient-to-r from-[#4881EB] to-[#7FD1FF] text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 will-change-transform"
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

export default SocModule;