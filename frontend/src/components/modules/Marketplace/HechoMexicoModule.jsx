import { useState, useMemo, useCallback } from 'react'

const HechoMexicoModule = ({ hoveredModule, moduleId }) => {
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
        borderColor: isHovered ? '#DC2626' : 'rgba(72, 129, 235, 0.1)',
        boxShadow: isHovered ? '0 0 30px rgba(220, 38, 38, 0.3)' : 'none'
    }), [isHovered]);
    
    return (
        <div 
            className="relative w-full h-full bg-[#0A0A14] rounded-3xl overflow-hidden border-2 transition-[border-color,box-shadow] duration-300"
            style={containerStyle}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-4">
                <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-gradient-to-br from-[#DC2626] to-[#991B1B] flex items-center justify-center p-2.5">
                        <img 
                            src="/assets/images/hechoEnMexico.svg" 
                            alt="Hecho en México" 
                            className="w-7 h-7 object-contain" 
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">Hecho en México</h3>
                        <p className="text-sm text-gray-400">Hecho en México</p>
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

            {/* Image Area */}
            <div className="relative mx-4 sm:mx-6 mb-4 rounded-2xl overflow-hidden flex items-center justify-center" style={{ height: '350px' }}>
                <img 
                    src="/assets/images/productos/hechoEnMexico.png" 
                    alt="Hecho en México" 
                    className="w-full h-full object-contain"
                    loading="lazy"
                />
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-between items-center px-4 sm:px-6 pb-4 sm:pb-6 gap-3 sm:gap-4">
                <div className="text-center flex-1 min-w-[80px] bg-[#1A1A2E]/30 rounded-xl p-2 sm:p-3">
                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-0.5 sm:mb-1">
                        100%
                    </p>
                    <p className="text-xs text-gray-400 break-words">
                        Cumplimiento
                    </p>
                </div>

                <div className="text-center flex-1 min-w-[80px] bg-[#1A1A2E]/30 rounded-xl p-2 sm:p-3">
                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#DC2626] mb-0.5 sm:mb-1">
                        3
                    </p>
                    <p className="text-xs text-gray-400 break-words">
                        Ubicaciones MX
                    </p>
                </div>

                <div className="text-center flex-1 min-w-[80px] bg-[#1A1A2E]/30 rounded-xl p-2 sm:p-3">
                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#00BFA5] mb-0.5 sm:mb-1">
                        0
                    </p>
                    <p className="text-xs text-gray-400 break-words">
                        Fugas de Datos
                    </p>
                </div>
            </div>

            {/* Modal */}
            {showInfoModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4" onClick={closeModal}>
                    <div className="bg-[#1A1A2E] rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border-2 border-[#DC2626]/30 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className="sticky top-0 bg-gradient-to-r from-[#DC2626] to-[#991B1B] p-6 flex items-center justify-between z-10">
                            <h2 className="text-2xl font-bold text-white">Hecho en México</h2>
                            <button onClick={closeModal} className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors" aria-label="Cerrar">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <p className="text-gray-300">Infraestructura 100% mexicana con 3 ubicaciones en México y cero fugas de datos.</p>
                            <button 
                                onClick={() => { closeModal(); handleAgendarCita(); }}
                                className="w-full bg-gradient-to-r from-[#DC2626] to-[#991B1B] text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 will-change-transform"
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

export default HechoMexicoModule;