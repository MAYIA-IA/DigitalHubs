import { useState, useMemo, useCallback } from 'react'

const DRPModule = ({ hoveredModule, moduleId }) => {
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
        borderColor: isHovered ? '#b059b1' : 'rgba(72, 129, 235, 0.1)',
        boxShadow: isHovered ? '0 0 30px rgba(72, 129, 235, 0.3)' : 'none',
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
                    {/* Contenedor de la nube con efecto 3D flotante */}
                    <div className="relative w-16 h-16">
                        {/* Nube principal */}
                        <div className="absolute -top-2 -left-2 w-20 h-20 animate-float">
                            <img 
                                src="public/assets/images/nube.png" 
                                alt="Cloud DRP" 
                                className="w-full h-full object-contain drop-shadow-2xl"
                                style={{
                                    filter: 'drop-shadow(0 10px 30px rgba(176, 89, 177, 0.6)) drop-shadow(0 0 20px rgba(176, 89, 177, 0.4))'
                                }}
                                loading="lazy"
                            />
                        </div>
                        
                        {/* Efecto de resplandor */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-[#b059b1]/40 to-[#1230C4]/40 rounded-full blur-xl"></div>
                    </div>
                    
                    <div className="ml-6">
                        <h3 className="text-xl font-bold text-white">DRP</h3>
                        <p className="text-sm text-gray-400">Recuperación ante Desastres</p>
                        <p className="text-xs text-[#b059b1] font-semibold">CLOUD</p>
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
                            <div className="absolute right-0 top-8 bg-[#1A1A2E] rounded-lg shadow-xl border border-[#b059b1]/20 overflow-hidden z-40 min-w-[200px]">
                                <button 
                                    onClick={handleAgendarCita}
                                    className="w-full px-4 py-3 text-left text-sm text-white hover:bg-[#b059b1]/20 transition-colors flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Agendar cita para cotización
                                </button>
                                <button 
                                    onClick={handleMasInformacion}
                                    className="w-full px-4 py-3 text-left text-sm text-white hover:bg-[#b059b1]/20 transition-colors flex items-center gap-2"
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

            {/* Video Area con información superpuesta */}
            <div className="relative mx-6 mb-6 rounded-2xl overflow-hidden" style={{ height: '350px' }}>
                <video 
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                >
                    <source src="public/assets/images/drpVideo.mp4" type="video/mp4" />
                </video>
                
                <div className="absolute inset-0 bg-black/30"></div>
                
                {/* Información centrada */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-11/12 sm:w-4/5 md:w-3/4 space-y-2">
                        <div className="bg-gradient-to-r from-[#5B9BD5]/90 to-[#4472C4]/90 py-2 px-3 sm:px-4 transform -skew-x-12 shadow-lg">
                            <p className="text-white font-bold text-xs sm:text-sm md:text-base text-center skew-x-12">Servicios Gestionados</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-[#70AD47]/90 to-[#5B9732]/90 py-2 px-3 sm:px-4 transform -skew-x-12 shadow-lg">
                            <p className="text-white font-semibold text-xs sm:text-sm text-center skew-x-12">Respaldo y Restauración<br/>desde la Nube</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-[#4472C4]/90 to-[#2E5396]/90 py-2 px-3 sm:px-4 transform -skew-x-12 shadow-lg">
                            <p className="text-white font-semibold text-xs sm:text-sm text-center skew-x-12">Respaldo y Restauración<br/>en la Nube</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-[#5B9BD5]/90 to-[#4472C4]/90 py-2 px-3 sm:px-4 transform -skew-x-12 shadow-lg">
                            <p className="text-white font-bold text-xs sm:text-sm md:text-base text-center skew-x-12">Replicar</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 px-4 sm:px-6 pb-6">
                <div className="text-center min-w-0">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white mb-1 leading-tight">Servidores Físicos+</p>
                </div>
                <div className="text-center min-w-0">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#4881EB] mb-1 leading-tight">Servidores Virtuales</p>
                </div>
                <div className="text-center min-w-0">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#00BFA5] mb-1 leading-tight">Soporte 24/7</p>
                </div>
            </div>

            {/* Modal */}
            {showInfoModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4" onClick={closeModal}>
                    <div className="bg-[#1A1A2E] rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border-2 border-[#b059b1]/30 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className="sticky top-0 bg-gradient-to-r from-[#b059b1] to-[#1230C4] p-6 flex items-center justify-between z-10">
                            <h2 className="text-2xl font-bold text-white">DRP - Recuperación ante Desastres</h2>
                            <button onClick={closeModal} className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors" aria-label="Cerrar">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <p className="text-gray-300">Protección completa con respaldo y restauración desde y en la nube.</p>
                            <button 
                                onClick={() => { closeModal(); handleAgendarCita(); }}
                                className="w-full bg-gradient-to-r from-[#b059b1] to-[#1230C4] text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 will-change-transform"
                            >
                                Agendar Cotización
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-10px) scale(1.05); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default DRPModule;