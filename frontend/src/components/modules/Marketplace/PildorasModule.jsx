import { useState, useMemo, useCallback } from 'react'

const PildorasModule = ({ hoveredModule, moduleId }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showInfoModal, setShowInfoModal] = useState(false);
    
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
        borderColor: isHovered ? '#00913f' : 'rgba(72, 129, 235, 0.1)',
        boxShadow: isHovered ? '0 0 30px rgba(20, 184, 166, 0.3)' : 'none',
        overflow: 'visible'
    }), [isHovered]);
    
    return (
        <div 
            className="relative w-full h-full bg-[#0A0A14] rounded-3xl border-2 transition-[border-color,box-shadow] duration-300"
            style={containerStyle}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-4">
                <div className="flex items-center gap-3">
                    <div className="relative w-16 h-16">
                        <div className="absolute -top-2 -left-2 w-20 h-20 animate-float-robot">
                            <img 
                                src="public/assets/images/robot.png" 
                                alt="Píldoras IA Robot" 
                                className="w-full h-full object-contain drop-shadow-2xl"
                                style={{
                                    filter: 'drop-shadow(0 10px 30px rgba(0, 145, 63, 0.6)) drop-shadow(0 0 20px rgba(20, 184, 166, 0.4))'
                                }}
                                loading="lazy"
                            />
                        </div>
                        
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-[#00913f]/40 to-[#0891B2]/40 rounded-full blur-xl"></div>
                    </div>
                    
                    <div className="ml-6">
                        <h3 className="text-xl font-bold text-white">Píldoras IA</h3>
                        <p className="text-sm text-gray-400">Soluciones PYME</p>
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
                            <div className="absolute right-0 top-8 bg-[#1A1A2E] rounded-lg shadow-xl border border-[#00913f]/20 overflow-hidden z-40 min-w-[200px]">
                                <button 
                                    onClick={handleAgendarCita}
                                    className="w-full px-4 py-3 text-left text-sm text-white hover:bg-[#00913f]/20 transition-colors flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Agendar cita para cotización
                                </button>
                                <button 
                                    onClick={handleMasInformacion}
                                    className="w-full px-4 py-3 text-left text-sm text-white hover:bg-[#00913f]/20 transition-colors flex items-center gap-2"
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

            {/* Image Area */}
            <div className="relative mx-6 mb-6 rounded-2xl overflow-hidden" style={{ height: '350px' }}>
                <img 
                    src="public/assets/images/productos/pildorasIA.png" 
                    alt="Servicios" 
                    className="w-full h-full object-contain"
                    loading="lazy"
                />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-3 px-3 sm:px-6 pb-6 items-center">
                <div className="text-center min-w-0 px-0.5">
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold text-white mb-0.5 leading-tight">SUSCRIPCIÓN</p>
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold text-white leading-tight">MENSUAL</p>
                </div>

                <div className="text-center min-w-0 px-0.5">
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold text-[#14B8A6] mb-0.5 leading-tight">NO REQUIERE</p>
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold text-[#14B8A6] leading-tight">INFRAESTRUCTURA</p>
                </div>

                <div className="text-center min-w-0 px-0.5">
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold text-[#0891B2] mb-0.5 leading-tight">SOLUCIONES IA</p>
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold text-[#0891B2] leading-tight">PRODUCTIVIDAD</p>
                </div>
            </div>

            {/* Modal */}
            {showInfoModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4" onClick={closeModal}>
                    <div className="bg-[#1A1A2E] rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border-2 border-[#00913f]/30 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className="sticky top-0 bg-gradient-to-r from-[#00913f] to-[#0891B2] p-6 flex items-center justify-between z-10">
                            <h2 className="text-2xl font-bold text-white">Píldoras IA</h2>
                            <button onClick={closeModal} className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors" aria-label="Cerrar">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <p className="text-gray-300">Soluciones de IA para PYMES con suscripción mensual sin necesidad de infraestructura.</p>
                            <button 
                                onClick={() => { closeModal(); handleAgendarCita(); }}
                                className="w-full bg-gradient-to-r from-[#00913f] to-[#0891B2] text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 will-change-transform"
                            >
                                Agendar Cotización
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes floatRobot {
                    0%, 100% { transform: translateY(0px) scale(1) rotate(-2deg); }
                    25% { transform: translateY(-8px) scale(1.03) rotate(0deg); }
                    50% { transform: translateY(-12px) scale(1.05) rotate(2deg); }
                    75% { transform: translateY(-8px) scale(1.03) rotate(0deg); }
                }

                .animate-float-robot {
                    animation: floatRobot 3.5s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default PildorasModule;