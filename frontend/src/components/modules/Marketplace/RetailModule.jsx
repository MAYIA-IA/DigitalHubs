import { useState, useMemo, useCallback } from 'react'

const RetailModule = ({ hoveredModule, moduleId }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showInfoModal, setShowInfoModal] = useState(false);
    
    // Estado para alerta (siempre activo para demostración)
    const alertActive = true;
    const detectedIntruders = 2;
    
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
    
    const videoContainerStyle = useMemo(() => ({
        height: '350px',
        borderColor: isHovered ? '#DC2626' : 'transparent',
        boxShadow: isHovered ? '0 0 20px rgba(220, 38, 38, 0.5), inset 0 0 20px rgba(220, 38, 38, 0.1)' : 'none'
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
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">Retail Inteligente</h3>
                        <p className="text-sm text-gray-400">Detección de Intrusos con IA</p>
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
                className="relative mx-4 sm:mx-6 mb-4 rounded-2xl overflow-hidden border-2 transition-[border-color,box-shadow] duration-300" 
                style={videoContainerStyle}
            >
                <video autoPlay muted loop playsInline preload="metadata" className="w-full h-full object-cover">
                    <source src="public/assets/images/productos/camara2.mp4" type="video/mp4" />
                </video>

                {/* Overlay de detección - Top */}
                <div className="absolute top-3 left-2 sm:left-3 flex flex-col gap-1.5 sm:gap-2">
                    <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black/70 backdrop-blur-sm rounded-lg flex items-center gap-1.5 sm:gap-2 max-w-[90%] sm:max-w-full">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <div className="min-w-0">
                            <p className="text-white font-semibold text-[10px] sm:text-xs truncate">Cámara 2 - Supermercado</p>
                            <p className="text-gray-300 text-[9px] sm:text-[10px] truncate">Pasillo Central</p>
                        </div>
                    </div>
                </div>

                {/* Alerta de intrusos - Top Right */}
                <div className="absolute top-3 right-2 sm:right-3 flex flex-col gap-1.5 sm:gap-2 items-end">
                    {alertActive && (
                        <>
                            <div className="px-2 sm:px-4 py-1.5 sm:py-2 bg-red-600/95 backdrop-blur-sm rounded-lg flex items-center gap-1.5 sm:gap-2 border border-red-400 max-w-[90%] sm:max-w-full">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                                </svg>
                                <div className="min-w-0">
                                    <p className="text-white font-bold text-[10px] sm:text-sm truncate">⚠️ ALERTA CRÍTICA</p>
                                    <p className="text-red-100 text-[9px] sm:text-xs truncate">{detectedIntruders} Intrusos Detectados</p>
                                </div>
                            </div>
                            
                            <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-green-600/90 backdrop-blur-sm rounded-lg flex items-center gap-1.5 sm:gap-2 max-w-[80%] sm:max-w-full">
                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span className="text-[10px] sm:text-xs text-white font-semibold truncate">Autoridades Notificadas</span>
                            </div>
                        </>
                    )}
                </div>

                {/* Indicadores - Bottom */}
                <div className="absolute bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex flex-col sm:flex-row justify-between items-stretch sm:items-end gap-2 sm:gap-0">
                    <div className="flex flex-col gap-1.5 sm:gap-2 flex-1 min-w-0">
                        <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black/70 backdrop-blur-sm rounded-lg min-w-0">
                            <p className="text-[9px] sm:text-[10px] text-gray-400 truncate">Última actualización</p>
                            <p className="text-[10px] sm:text-xs text-white font-mono truncate">
                                {new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                            </p>
                        </div>
                    </div>

                    <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black/70 backdrop-blur-sm rounded-lg flex items-center gap-1.5 sm:gap-2 justify-center sm:justify-start min-w-0">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 animate-pulse-slow flex-shrink-0"></div>
                        <span className="text-[10px] sm:text-xs text-white font-bold truncate">GRABANDO</span>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-between items-center px-4 sm:px-6 pb-4 sm:pb-6 gap-3 sm:gap-4">
                <div className="text-center flex-1 min-w-[70px] bg-[#1A1A2E]/30 rounded-xl p-2 sm:p-3">
                    <p className="text-base sm:text-lg font-bold text-red-500 mb-0.5 sm:mb-1 hover:text-white transition-colors cursor-default truncate">
                        {alertActive ? '⚠️ Activa' : '✓ Normal'}
                    </p>
                    <p className="text-xs text-gray-400 hover:text-white transition-colors cursor-default truncate">Estado</p>
                </div>

                <div className="text-center flex-1 min-w-[70px] bg-[#1A1A2E]/30 rounded-xl p-2 sm:p-3">
                    <p className="text-base sm:text-lg font-bold text-[#9333EA] mb-0.5 sm:mb-1 hover:text-white transition-colors cursor-default truncate">IA Activa</p>
                    <p className="text-xs text-gray-400 hover:text-white transition-colors cursor-default truncate">Detección</p>
                </div>

                <div className="text-center flex-1 min-w-[70px] bg-[#1A1A2E]/30 rounded-xl p-2 sm:p-3">
                    <p className="text-base sm:text-lg font-bold text-[#00BFA5] mb-0.5 sm:mb-1 hover:text-white transition-colors cursor-default truncate">Tiempo Real</p>
                    <p className="text-xs text-gray-400 hover:text-white transition-colors cursor-default truncate">Respuesta</p>
                </div>
            </div>

            {/* Modal */}
            {showInfoModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4" onClick={closeModal}>
                    <div className="bg-[#1A1A2E] rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border-2 border-[#DC2626]/30 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className="sticky top-0 bg-gradient-to-r from-[#DC2626] to-[#991B1B] p-6 flex items-center justify-between z-10">
                            <h2 className="text-2xl font-bold text-white">Retail Inteligente</h2>
                            <button onClick={closeModal} className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors" aria-label="Cerrar">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <p className="text-gray-300">Sistema de detección de intrusos con IA para retail con respuesta en tiempo real.</p>
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

            <style jsx>{`
                @keyframes pulseSlow {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }

                .animate-pulse-slow {
                    animation: pulseSlow 2s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default RetailModule;