import { useState, useMemo, useCallback } from 'react'

const FlaiModule = ({ hoveredModule, moduleId }) => {
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
    
    const imageContainerStyle = useMemo(() => ({
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
                        <img 
                            src="public/assets/images/flai.png" 
                            alt="FLAI" 
                            className="w-7 h-7 object-contain"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">FLAI</h3>
                        <p className="text-sm text-gray-400">Nube Soberana</p>
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
            <div 
                className="relative mx-6 mb-4 rounded-2xl overflow-hidden border-2 transition-[border-color,box-shadow] duration-300" 
                style={imageContainerStyle}
            >
                <video 
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-auto block"
                >
                    <source src="public/assets/images/productos/flaiMarcoVideo.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Stats */}
            <div className="flex justify-around px-6 pb-4">
                <div className="text-center">
                    <p className="text-base font-bold text-white mb-1 hover:text-[#006847] transition-colors cursor-default">100% México</p>
                    <p className="text-xs text-gray-400 hover:text-white transition-colors cursor-default">Datos en México</p>
                </div>
                <div className="text-center">
                    <p className="text-base font-bold text-[#DC2626] mb-1 hover:text-white transition-colors cursor-default">1era Nube IA</p>
                    <p className="text-xs text-gray-400 hover:text-white transition-colors cursor-default">Soberana</p>
                </div>
                <div className="text-center">
                    <p className="text-base font-bold text-[#006847] mb-1 hover:text-white transition-colors cursor-default">30 CDN</p>
                    <p className="text-xs text-gray-400 hover:text-white transition-colors cursor-default">Centros de Datos</p>
                </div>
            </div>

            {/* Logo Lenovo - SIN hover inline styles, solo CSS */}
            <div className="flex justify-center px-6 pb-6">
                <img 
                    src="public/assets/images/productos/lenovo.png" 
                    alt="Lenovo Partner" 
                    className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    loading="lazy"
                />
            </div>

            {/* Modal de Información */}
            {showInfoModal && (
                <div 
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4" 
                    onClick={closeModal}
                >
                    <div 
                        className="bg-[#1A1A2E] rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border-2 border-[#DC2626]/30 shadow-2xl" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header del Modal */}
                        <div className="sticky top-0 bg-gradient-to-r from-[#DC2626] to-[#991B1B] p-6 flex items-center justify-between z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-2">
                                    <img 
                                        src="public/assets/images/flai.png" 
                                        alt="FLAI" 
                                        className="w-full h-full object-contain"
                                        loading="lazy"
                                    />
                                </div>
                                <h2 className="text-2xl font-bold text-white">FLAI - Nube Soberana</h2>
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
                            <div>
                                <p className="text-gray-300 leading-relaxed">
                                    <span className="font-bold text-[#DC2626]">FLAI</span> es la primera nube de inteligencia artificial soberana de México, diseñada para mantener tus datos dentro del territorio nacional con la más alta seguridad y rendimiento.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    {
                                        color: '#006847',
                                        title: '100% México',
                                        text: 'Todos tus datos permanecen en territorio mexicano, garantizando soberanía digital completa.'
                                    },
                                    {
                                        color: '#DC2626',
                                        title: 'Primera Nube IA Soberana',
                                        text: 'Infraestructura especializada en inteligencia artificial con procesamiento de alto rendimiento.'
                                    },
                                    {
                                        color: '#006847',
                                        title: '30 Centros de Datos',
                                        text: 'Red distribuida de centros de datos edge para máxima disponibilidad y baja latencia.'
                                    }
                                ].map((feature, idx) => (
                                    <div key={idx} className="bg-[#0A0A14] rounded-xl p-4 border" style={{ borderColor: `${feature.color}33` }}>
                                        <h3 className="font-semibold mb-2" style={{ color: feature.color }}>
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm">{feature.text}</p>
                                    </div>
                                ))}
                            </div>

                            <button 
                                onClick={() => {
                                    closeModal();
                                    handleAgendarCita();
                                }}
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

export default FlaiModule;