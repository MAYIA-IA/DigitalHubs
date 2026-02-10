import { useState, useMemo, useCallback } from 'react'

const SenderoSeguroModule = ({ hoveredModule, moduleId }) => {
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
                    <div className="relative w-16 h-16">
                        <div className="absolute -top-2 -left-2 w-20 h-20 animate-float-security">
                            <img 
                                src="public/assets/images/seguridad.png" 
                                alt="Sendero Seguro" 
                                className="w-full h-full object-contain drop-shadow-2xl"
                                style={{
                                    filter: 'drop-shadow(0 10px 30px rgba(72, 129, 235, 0.6)) drop-shadow(0 0 20px rgba(176, 89, 177, 0.4))'
                                }}
                                loading="lazy"
                            />
                        </div>
                        
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-[#4881EB]/40 to-[#b059b1]/40 rounded-full blur-xl"></div>
                    </div>
                    
                    <div className="ml-6">
                        <h3 className="text-xl font-bold text-white">Sendero Seguro</h3>
                        <p className="text-sm text-gray-400">Inteligencia en seguridad</p>
                        <p className="text-xs text-[#b059b1] font-semibold">de género</p>
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

            {/* Content Area - SIN GSAP, solo CSS */}
            <div className="relative mx-6 mb-6 rounded-2xl overflow-hidden" style={{ height: '350px' }}>
                <video 
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                >
                    <source src="public/assets/images/productos/senderoSeguro.mp4" type="video/mp4" />
                </video>
                
                {/* Overlay de cámara de seguridad */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Indicador de grabación */}
                    <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded backdrop-blur-sm">
                        <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse-slow"></div>
                        <span className="text-white text-xs font-mono">REC</span>
                        <span className="text-white text-xs font-mono">CAM-01</span>
                    </div>
                    
                    {/* Timestamp */}
                    <div className="absolute top-3 right-3 bg-black/60 px-3 py-1.5 rounded backdrop-blur-sm">
                        <span className="text-white text-xs font-mono">18:45:23</span>
                    </div>

                    {/* Detección Mujer */}
                    <div className="absolute left-[40%] top-[45%] pointer-events-auto animate-fadeIn animation-delay-400">
                        <div className="relative">
                            <div className="w-24 h-44 border-2 border-pink-500 rounded-sm relative">
                                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-pink-500"></div>
                                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-pink-500"></div>
                                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-pink-500"></div>
                                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-pink-500"></div>
                            </div>
                            <div className="absolute -top-7 left-0 bg-pink-500/90 rounded px-2 py-0.5 backdrop-blur-sm border border-pink-300/50 whitespace-nowrap">
                                <p className="text-white font-bold text-[9px]">MUJER DETECTADA</p>
                            </div>
                        </div>
                    </div>

                    {/* Detección Hombres 1 */}
                    <div className="absolute right-[61%] top-[55%] pointer-events-auto animate-fadeIn animation-delay-600">
                        <div className="relative">
                            <div className="w-16 h-24 border-2 border-blue-500 rounded-sm relative">
                                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-blue-500"></div>
                                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-blue-500"></div>
                                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-blue-500"></div>
                                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-blue-500"></div>
                            </div>
                            <div className="absolute -top-7 left-0 bg-blue-500/90 rounded px-2 py-0.5 backdrop-blur-sm border border-blue-300/50 whitespace-nowrap">
                                <p className="text-white font-bold text-[9px]">2 HOMBRES</p>
                            </div>
                        </div>
                    </div>

                    {/* Detección Hombres 2 */}
                    <div className="absolute right-[0%] top-[55%] pointer-events-auto animate-fadeIn animation-delay-800">
                        <div className="relative">
                            <div className="w-16 h-24 border-2 border-blue-400 rounded-sm relative">
                                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-blue-400"></div>
                                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-blue-400"></div>
                                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-blue-400"></div>
                                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-blue-400"></div>
                            </div>
                            <div className="absolute -top-7 left-0 bg-blue-400/90 rounded px-2 py-0.5 backdrop-blur-sm border border-blue-200/50 whitespace-nowrap">
                                <p className="text-white font-bold text-[9px]">2 HOMBRES</p>
                            </div>
                        </div>
                    </div>

                    {/* Alerta Sospechosos */}
                    <div className="absolute top-12 right-4 bg-red-600/90 rounded-lg px-3 py-2 backdrop-blur-md border-2 border-red-400/50 shadow-lg pointer-events-auto animate-fadeIn animation-delay-200">
                        <div className="flex items-center gap-2">
                            <span className="text-lg">⚠️</span>
                            <div>
                                <p className="text-white font-bold text-[11px] leading-tight">ALERTA SOSPECHOSOS</p>
                                <p className="text-red-200 text-[9px]">Patrón irregular detectado</p>
                            </div>
                        </div>
                    </div>

                    {/* Grid de cámara sutil */}
                    <div className="absolute inset-0 pointer-events-none opacity-10">
                        <div className="w-full h-full" style={{
                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                        }}></div>
                    </div>

                    {/* Escaneo línea horizontal */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-scan"></div>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-between items-stretch px-4 sm:px-6 pb-4 sm:pb-6 gap-3 sm:gap-4">
                <div className="text-center flex-1 min-w-[100px] bg-[#1A1A2E]/30 rounded-xl p-3">
                    <p className="text-2xl sm:text-3xl font-bold text-white mb-1">32+</p>
                    <p className="text-xs sm:text-sm text-gray-400 break-words">Eventos Detectados</p>
                </div>

                <div className="text-center flex-1 min-w-[100px] bg-[#1A1A2E]/30 rounded-xl p-3">
                    <p className="text-base sm:text-xl font-bold text-[#4881EB] mb-0.5 leading-tight break-words">ANALÍTICA</p>
                    <p className="text-base sm:text-l font-bold text-[#4881EB] mb-1 leading-tight break-words">INTELIGENTE</p>
                    <p className="text-xs sm:text-xs text-gray-400 mt-1 leading-tight break-words">Mismas cámaras</p>
                </div>

                <div className="text-center flex-1 min-w-[100px] bg-[#1A1A2E]/30 rounded-xl p-3">
                    <p className="text-base sm:text-lg font-bold text-white mb-0.5 leading-tight break-words">MONITOREO</p>
                    <p className="text-xs sm:text-sm text-gray-400 leading-tight break-words">FLAI Nube Soberana</p>
                    <p className="text-xs sm:text-xs text-[#b059b1] mt-1 font-semibold leading-tight break-words">Alerta Autoridades</p>
                </div>
            </div>

            {/* Modal */}
            {showInfoModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4" onClick={closeModal}>
                    <div className="bg-[#1A1A2E] rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border-2 border-[#b059b1]/30 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className="sticky top-0 bg-gradient-to-r from-[#4881EB] to-[#b059b1] p-6 flex items-center justify-between z-10">
                            <h2 className="text-2xl font-bold text-white">Sendero Seguro</h2>
                            <button onClick={closeModal} className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors" aria-label="Cerrar">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <p className="text-gray-300">Inteligencia artificial aplicada a la seguridad de género con detección y alertas en tiempo real.</p>
                            <button 
                                onClick={() => { closeModal(); handleAgendarCita(); }}
                                className="w-full bg-gradient-to-r from-[#4881EB] to-[#b059b1] text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 will-change-transform"
                            >
                                Agendar Cotización
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes floatSecurity {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-12px) scale(1.05); }
                }

                @keyframes scan {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(350px); }
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateX(30px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                @keyframes pulseSlow {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }

                .animate-float-security {
                    animation: floatSecurity 3s ease-in-out infinite;
                }
                
                .animate-scan {
                    animation: scan 3s linear infinite;
                }

                .animate-fadeIn {
                    animation: fadeIn 0.6s ease-out forwards;
                    opacity: 0;
                }

                .animate-pulse-slow {
                    animation: pulseSlow 2s ease-in-out infinite;
                }

                .animation-delay-200 { animation-delay: 0.2s; }
                .animation-delay-400 { animation-delay: 0.4s; }
                .animation-delay-600 { animation-delay: 0.6s; }
                .animation-delay-800 { animation-delay: 0.8s; }
            `}</style>
        </div>
    );
};

export default SenderoSeguroModule;