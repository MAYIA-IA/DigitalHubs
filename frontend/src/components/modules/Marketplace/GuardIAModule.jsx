import { useState, useMemo, useCallback } from 'react'

const GuardIAModule = ({ hoveredModule, moduleId }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedCamera, setExpandedCamera] = useState(null);
    const [showInfoModal, setShowInfoModal] = useState(false);
    
    const calendlyUrl = "https://calendly.com/tu-usuario/cotizacion";
    
    const cameras = [
        { id: 1, name: 'Cámara 1', video: '/assets/images/productos/camara1.mp4', location: 'Entrada Principal' },
        { id: 2, name: 'Cámara 2', video: '/assets/images/productos/camara2.mp4', location: 'Pasillo Central' },
        { id: 3, name: 'Cámara 3', video: '/assets/images/productos/camara3.mp4', location: 'Área de Servidores' },
        { id: 4, name: 'Cámara 4', video: '/assets/images/productos/camara4.mp4', location: 'Sala de Control' }
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
    const closeMenu = useCallback(() => setMenuOpen(false), []);
    const closeModal = useCallback(() => setShowInfoModal(false), []);
    
    const containerStyle = useMemo(() => ({
        borderColor: isHovered ? '#4881EB' : 'rgba(72, 129, 235, 0.1)',
        boxShadow: isHovered ? '0 0 30px rgba(72, 129, 235, 0.3)' : 'none',
        overflow: 'visible'
    }), [isHovered]);
    
    const videoContainerStyle = useMemo(() => ({
        height: '350px',
        borderColor: isHovered ? '#4881EB' : 'transparent',
        boxShadow: isHovered ? '0 0 20px rgba(72, 129, 235, 0.5), inset 0 0 20px rgba(72, 129, 235, 0.1)' : 'none'
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
                        <div className="absolute -top-2 -left-2 w-20 h-20 animate-float-camera">
                            <img 
                                src="/assets/images/camaraSeg.png" 
                                alt="Guard-IA Cámara" 
                                className="w-full h-full object-contain drop-shadow-2xl"
                                style={{
                                    filter: 'drop-shadow(0 10px 30px rgba(72, 129, 235, 0.6)) drop-shadow(0 0 20px rgba(18, 48, 196, 0.4))'
                                }}
                                loading="lazy"
                            />
                        </div>
                        
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-[#4881EB]/40 to-[#1230C4]/40 rounded-full blur-xl"></div>
                        <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse-slow"></div>
                    </div>
                    
                    <div className="ml-6">
                        <h3 className="text-xl font-bold text-white">
                            SW Guard-<span className="text-[#00BFA5]">IA</span>
                        </h3>
                        <p className="text-sm text-gray-400">
                            <span className="text-[#00BFA5]">IA</span> en tus mismas cámaras
                        </p>
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
                className="relative mx-6 mb-6 rounded-2xl overflow-hidden border-2 transition-[border-color,box-shadow] duration-300" 
                style={videoContainerStyle}
            >
                {expandedCamera ? (
                    <div className="relative w-full h-full">
                        <video autoPlay muted loop playsInline preload="metadata" className="w-full h-full object-cover">
                            <source src={cameras.find(c => c.id === expandedCamera).video} type="video/mp4" />
                        </video>
                        
                        <div className="absolute top-3 left-3 px-4 py-2 bg-black/70 backdrop-blur-sm rounded-lg">
                            <p className="text-white font-semibold text-sm">{cameras.find(c => c.id === expandedCamera).name}</p>
                            <p className="text-gray-300 text-xs">{cameras.find(c => c.id === expandedCamera).location}</p>
                        </div>

                        <div className="absolute top-3 right-3 px-3 py-1.5 bg-red-500/90 backdrop-blur-sm rounded-lg flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-white animate-pulse-slow"></div>
                            <span className="text-xs text-white font-bold">EN VIVO</span>
                        </div>
                        
                        <button 
                            onClick={() => setExpandedCamera(null)}
                            className="absolute bottom-3 left-3 px-4 py-2 bg-black/70 backdrop-blur-sm rounded-lg flex items-center gap-2 text-white hover:bg-black/90 transition-all"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span className="text-sm font-semibold">Regresar</span>
                        </button>
                    </div>
                ) : (
                    <div className="relative w-full h-full p-2">
                        <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full h-full">
                            {cameras.map((camera) => (
                                <div 
                                    key={camera.id}
                                    onClick={() => setExpandedCamera(camera.id)}
                                    className="relative rounded-lg overflow-hidden cursor-pointer group hover:ring-2 hover:ring-[#4881EB] transition-all"
                                >
                                    <video autoPlay muted loop playsInline preload="metadata" className="w-full h-full object-cover">
                                        <source src={camera.video} type="video/mp4" />
                                    </video>
                                    
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="absolute bottom-2 left-2">
                                            <p className="text-white font-semibold text-xs">{camera.name}</p>
                                            <p className="text-gray-300 text-[10px]">{camera.location}</p>
                                        </div>
                                    </div>

                                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 animate-pulse-slow"></div>

                                    <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Textos centrales */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[90%] max-w-[280px]">
                            <div className="bg-black/60 backdrop-blur-sm rounded-xl p-2 sm:p-4 border border-red-500/40 shadow-lg shadow-red-500/30 mx-auto">
                                <div className="grid grid-cols-2 gap-1 sm:gap-2 text-center">
                                    {['SEGURIDAD', 'EFICIENCIA\nOPERATIVA', 'REDUCCIÓN\nDE MERMA', 'SEGURIDAD\nEN EL TRABAJO'].map((text, idx) => (
                                        <div key={idx} className="flex flex-col items-center justify-center px-1">
                                            <p className="text-red-500 font-bold text-[10px] xs:text-xs leading-tight drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] break-words whitespace-pre-line">
                                                {text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-between items-center px-4 sm:px-6 pb-4 sm:pb-6 gap-3 sm:gap-4">
                <div className="text-center flex-1 min-w-[100px]">
                    <p className="text-xl sm:text-2xl font-bold text-white mb-1">200+</p>
                    <p className="text-xs sm:text-sm text-gray-400 whitespace-nowrap">Eventos</p>
                </div>
                <div className="text-center flex-1 min-w-[100px]">
                    <p className="text-lg sm:text-xl font-bold text-[#4881EB] mb-1 leading-tight break-words">1000 Cámaras</p>
                    <p className="text-xs sm:text-sm text-gray-400 leading-tight whitespace-nowrap">Un Solo Operador</p>
                </div>
                <div className="text-center flex-1 min-w-[100px]">
                    <p className="text-lg sm:text-xl font-bold text-white mb-1 leading-tight break-words">Analítica Avanzada</p>
                    <p className="text-xs sm:text-sm text-gray-400 leading-tight">Forensia Con <span className="text-[#00BFA5] font-bold">IA</span></p>
                </div>
            </div>

            {/* Modal */}
            {showInfoModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4" onClick={closeModal}>
                    <div className="bg-[#1A1A2E] rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border-2 border-[#4881EB]/30 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className="sticky top-0 bg-gradient-to-r from-[#4881EB] to-[#00BFA5] p-6 flex items-center justify-between z-10">
                            <h2 className="text-2xl font-bold text-white">SW Guard-IA</h2>
                            <button onClick={closeModal} className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors" aria-label="Cerrar">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <p className="text-gray-300">Sistema de videovigilancia inteligente con IA para gestionar hasta 1000 cámaras con un solo operador.</p>
                            <button 
                                onClick={() => { closeModal(); handleAgendarCita(); }}
                                className="w-full bg-gradient-to-r from-[#4881EB] to-[#00BFA5] text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 will-change-transform"
                            >
                                Agendar Cotización
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes floatCamera {
                    0%, 100% { transform: translateY(0px) scale(1) rotate(-1deg); }
                    50% { transform: translateY(-10px) scale(1.05) rotate(1deg); }
                }

                @keyframes pulseSlow {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }

                .animate-float-camera {
                    animation: floatCamera 3s ease-in-out infinite;
                }

                .animate-pulse-slow {
                    animation: pulseSlow 2s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default GuardIAModule;