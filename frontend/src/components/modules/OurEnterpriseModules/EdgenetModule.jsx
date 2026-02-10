import { useState, useMemo, useCallback } from 'react'

const EdgenetModule = ({ hoveredModule, moduleId }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [videoEnabled, setVideoEnabled] = useState(true);
    const [showInfoModal, setShowInfoModal] = useState(false);
    
    // URL de Calendly - reemplaza esto con tu URL real cuando la tengas
    const calendlyUrl = "https://calendly.com/tu-usuario/cotizacion";
    
    // Memoizar estado de hover para evitar re-renders innecesarios
    const isHovered = useMemo(() => hoveredModule === moduleId, [hoveredModule, moduleId]);
    
    // Callbacks memoizados para evitar recrear funciones
    const handleAgendarCita = useCallback(() => {
        window.open(calendlyUrl, '_blank', 'width=800,height=800');
        setMenuOpen(false);
    }, [calendlyUrl]);
    
    const handleMasInformacion = useCallback(() => {
        setShowInfoModal(true);
        setMenuOpen(false);
    }, []);
    
    const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);
    const toggleVideo = useCallback(() => setVideoEnabled(prev => !prev), []);
    const closeMenu = useCallback(() => setMenuOpen(false), []);
    const closeModal = useCallback(() => setShowInfoModal(false), []);
    
    // Estilos calculados una sola vez
    const containerStyle = useMemo(() => ({
        borderColor: isHovered ? '#4881EB' : 'rgba(72, 129, 235, 0.1)',
        boxShadow: isHovered ? '0 0 30px rgba(76, 175, 80, 0.3)' : 'none'
    }), [isHovered]);
    
    const videoContainerStyle = useMemo(() => ({
        height: '350px',
        borderColor: isHovered ? '#4881EB' : 'transparent',
        boxShadow: isHovered ? '0 0 20px rgba(76, 175, 80, 0.5), inset 0 0 20px rgba(76, 175, 80, 0.1)' : 'none'
    }), [isHovered]);
    
    return (
        <div 
            className="relative w-full h-full bg-[#0A0A14] rounded-3xl overflow-hidden border-2 transition-[border-color,box-shadow] duration-300"
            style={containerStyle}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                        <img 
                            src="/assets/images/edgenetCircle.png" 
                            alt="EdgeNet" 
                            className="w-7 h-7"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-white">
                            e<span className="text-xl font-bold text-white">dgenet</span>
                        </h3>
                        <p className="text-sm text-gray-400">Centro De Datos En Yucatan</p>
                    </div>
                </div>
                
                {/* Menu dropdown */}
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
                            <div 
                                className="fixed inset-0 z-30" 
                                onClick={closeMenu}
                                aria-hidden="true"
                            />
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

            {/* Video Area - OPTIMIZADO */}
            <div 
                className="relative mx-6 mb-4 rounded-2xl overflow-hidden border-2 transition-[border-color,box-shadow] duration-300" 
                style={videoContainerStyle}
            >
                {videoEnabled ? (
                    <>
                        <video 
                            autoPlay 
                            muted 
                            loop 
                            playsInline 
                            className="w-full h-full object-cover"
                            preload="metadata"
                        >
                            <source src="/assets/images/productos/edgenetDatos.mp4" type="video/mp4" />
                        </video>

                        {/* Overlays - SIN animate-pulse para mejor performance */}
                        <div className="absolute top-3 left-3 flex flex-col gap-2">
                            {[
                                { img: 'movistarLogo.png', name: 'Movistar' },
                                { img: 'facebookLogo.png', name: 'Facebook' },
                                { img: 'spotify.svg', name: 'Spotify' },
                                { img: 'netflixLogo.png', name: 'Netflix' }
                            ].map(({ img, name }) => (
                                <div key={name} className="px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-lg flex items-center gap-2 w-fit">
                                    <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
                                    <img 
                                        src={`/assets/images/productos/${img}`}
                                        alt={name}
                                        className="h-4 w-auto flex-shrink-0"
                                        loading="lazy"
                                    />
                                    <span className="text-xs text-white font-semibold whitespace-nowrap">{name}</span>
                                </div>
                            ))}
                        </div>

                        <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
                            <div className="px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-lg text-xs text-white whitespace-nowrap w-fit">
                                📹 Cámara 1 - Sala
                            </div>
                            <div className="px-3 py-1.5 bg-green-500/90 backdrop-blur-sm rounded-lg flex items-center gap-2 w-fit">
                                <svg className="w-4 h-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                                </svg>
                                <span className="text-xs text-white font-bold whitespace-nowrap">Sin Alertas</span>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="w-full h-full bg-[#0A0A14] flex items-center justify-center">
                        <p className="text-white text-lg font-semibold">Video deshabilitado</p>
                    </div>
                )}

                <button 
                    onClick={toggleVideo}
                    className="absolute bottom-3 right-3 w-10 h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform will-change-transform"
                    aria-label={videoEnabled ? "Deshabilitar video" : "Habilitar video"}
                >
                    {videoEnabled ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                    ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                        </svg>
                    )}
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 px-4 sm:px-6 pb-6">
                {[
                    ['Colocación', 'Conectividad'],
                    ['Interconexión', 'Gestión'],
                    ['Soporte', 'Infraestructura']
                ].map((pair, idx) => (
                    <div key={idx} className="text-center min-w-0">
                        {pair.map((text) => (
                            <p key={text} className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-default truncate px-1">
                                {text}
                            </p>
                        ))}
                    </div>
                ))}
            </div>

            {/* Modal - Solo renderiza cuando está activo */}
            {showInfoModal && (
                <div 
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4" 
                    onClick={closeModal}
                >
                    <div 
                        className="bg-[#1A1A2E] rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border-2 border-[#4881EB]/30 shadow-2xl" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header del Modal */}
                        <div className="sticky top-0 bg-gradient-to-r from-[#4881EB] to-[#4CB050] p-6 flex items-center justify-between z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                                    <img 
                                        src="/assets/images/edgenetCircle.png" 
                                        alt="EdgeNet" 
                                        className="w-7 h-7"
                                        loading="lazy"
                                    />
                                </div>
                                <h2 className="text-2xl font-bold text-white">EdgeNet</h2>
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

                        {/* Contenido del Modal */}
                        <div className="p-6 space-y-6">
                            {/* Descripción Principal */}
                            <div>
                                <p className="text-gray-300 leading-relaxed">
                                    <span className="font-bold text-[#4881EB]">EdgeNet</span> es una empresa mexicana pionera en infraestructura tecnológica que opera una red de <span className="font-semibold text-white">30 centros de datos descentralizados</span> (tipo edge) a nivel nacional, orientada a la soberanía digital y la inteligencia artificial (IA).
                                </p>
                                <p className="text-gray-300 leading-relaxed mt-3">
                                    Proporciona servicios de colocación, nube privada y ciberseguridad, permitiendo que las empresas mantengan sus datos dentro del país para reducir la latencia y garantizar seguridad.
                                </p>
                            </div>

                            {/* Características Principales */}
                            <div className="space-y-4">
                                {[
                                    {
                                        color: '#4881EB',
                                        title: 'Infraestructura y Ubicación',
                                        icon: 'M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z',
                                        text: 'Cuenta con 30 centros de datos edge distribuidos estratégicamente para acercar el cómputo al lugar donde se originan los datos.'
                                    },
                                    {
                                        color: '#4CB050',
                                        title: 'Enfoque en IA',
                                        icon: 'M13 7H7v6h6V7z M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z',
                                        text: 'Servidores de alto rendimiento equipados con GPUs y TPUs avanzadas, facilitando el procesamiento intensivo de inteligencia artificial.'
                                    },
                                    {
                                        color: '#4881EB',
                                        title: 'Soberanía de Datos',
                                        icon: 'M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z',
                                        text: 'Garantiza que la información sensible de empresas mexicanas permanezca dentro de territorio nacional, ofreciendo una alternativa local a las nubes extranjeras.'
                                    },
                                    {
                                        color: '#4CB050',
                                        title: 'Servicios Principales',
                                        icon: 'M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z',
                                        text: 'Ciberseguridad multicapa, monitoreo 24/7, nube privada, refrigeración líquida y soluciones de recuperación de datos.'
                                    }
                                ].map((feature, idx) => (
                                    <div key={idx} className="bg-[#0A0A14] rounded-xl p-4 border" style={{ borderColor: `${feature.color}33` }}>
                                        <h3 className="font-semibold mb-2 flex items-center gap-2" style={{ color: feature.color }}>
                                            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d={feature.icon} clipRule="evenodd"/>
                                            </svg>
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm">{feature.text}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Sectores Atendidos */}
                            <div className="bg-gradient-to-r from-[#4881EB]/10 to-[#4CB050]/10 rounded-xl p-4 border border-[#4881EB]/20">
                                <h3 className="text-white font-semibold mb-3">Sectores Atendidos</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {['Retail', 'Banca', 'Fintech', 'Salud', 'Logística', 'Manufactura'].map((sector) => (
                                        <div key={sector} className="flex items-center gap-2 text-gray-300 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#4CB050] flex-shrink-0"></div>
                                            {sector}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Reconocimiento */}
                            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-4 border border-yellow-500/30">
                                <div className="flex items-start gap-3">
                                    <div className="text-2xl flex-shrink-0">🏆</div>
                                    <div>
                                        <h3 className="text-yellow-400 font-semibold mb-1">Reconocimiento</h3>
                                        <p className="text-gray-300 text-sm">
                                            Primer reconocimiento <span className="font-semibold text-white">"Hecho en México"</span> para una empresa de centros de datos.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Botón de Acción */}
                            <button 
                                onClick={() => {
                                    closeModal();
                                    handleAgendarCita();
                                }}
                                className="w-full bg-gradient-to-r from-[#4881EB] to-[#4CB050] text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 will-change-transform"
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

export default EdgenetModule;