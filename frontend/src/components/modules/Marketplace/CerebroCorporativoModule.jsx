import { useState, useMemo, useCallback } from 'react'

const CerebroCorporativoModule = ({ hoveredModule, moduleId }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showInfoModal, setShowInfoModal] = useState(false);
    const calendlyUrl = "https://calendly.com/tu-usuario/cotizacion";
    const isHovered = useMemo(() => hoveredModule === moduleId, [hoveredModule, moduleId]);
    const handleAgendarCita = useCallback(() => { window.open(calendlyUrl, '_blank', 'width=800,height=800'); setMenuOpen(false); }, [calendlyUrl]);
    const handleMasInformacion = useCallback(() => { setShowInfoModal(true); setMenuOpen(false); }, []);
    const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);
    const closeMenu = useCallback(() => setMenuOpen(false), []);
    const closeModal = useCallback(() => setShowInfoModal(false), []);

    const containerStyle = useMemo(() => ({
        borderColor: isHovered ? '#0EA5E9' : 'rgba(72, 129, 235, 0.1)',
        boxShadow: isHovered ? '0 0 30px rgba(14, 165, 233, 0.3)' : 'none',
        overflow: 'visible'
    }), [isHovered]);

    return (
        <div className="relative w-full h-full bg-[#0A0A14] rounded-3xl border-2 transition-[border-color,box-shadow] duration-300" style={containerStyle}>
            {/* Header */}
            <div className="flex items-center justify-between p-3 lg:p-6 pb-2 lg:pb-4">
                <div className="flex items-center gap-2 lg:gap-3">
                    <div className="relative w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full blur-xl" style={{ background: '#0EA5E933' }}></div>
                        <div className="relative w-10 h-10 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#0EA5E922,#0284C722)', border: '1.5px solid #0EA5E944' }}>
                            <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="#0EA5E9" viewBox="0 0 24 24" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                            </svg>
                        </div>
                    </div>
                    <div className="ml-1 lg:ml-3">
                        <h3 className="text-sm lg:text-xl font-bold text-white leading-tight">Cerebro Corporativo IA</h3>
                        <p className="text-[9px] lg:text-sm text-gray-400 leading-tight">Conocimiento institucional</p>
                    </div>
                </div>
                <div className="relative z-10">
                    <button onClick={toggleMenu} className="text-gray-400 hover:text-white transition-colors" aria-label="Abrir menú">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="5" r="1.5"/><circle cx="10" cy="10" r="1.5"/><circle cx="10" cy="15" r="1.5"/></svg>
                    </button>
                    {menuOpen && (
                        <>
                            <div className="fixed inset-0 z-30" onClick={closeMenu} aria-hidden="true"/>
                            <div className="absolute right-0 top-8 bg-[#1A1A2E] rounded-lg shadow-xl overflow-hidden z-40 min-w-[200px]" style={{ border: '1px solid #0EA5E933' }}>
                                <button onClick={handleAgendarCita} className="w-full px-4 py-3 text-left text-sm text-white transition-colors flex items-center gap-2" onMouseEnter={e => e.currentTarget.style.background='#0EA5E922'} onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    Agendar cita para cotización
                                </button>
                                <button onClick={handleMasInformacion} className="w-full px-4 py-3 text-left text-sm text-white transition-colors flex items-center gap-2" onMouseEnter={e => e.currentTarget.style.background='#0EA5E922'} onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    Más información
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Video Area */}
            <div className="relative mx-3 lg:mx-6 mb-3 lg:mb-6 rounded-2xl overflow-hidden h-[180px] lg:h-[350px] flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#0A0A14,#0EA5E911)', border: '1px dashed #0EA5E933' }}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                >
                    {/* 🎬 REEMPLAZA ESTA RUTA CON TU VIDEO */}
                    <source src="/assets/images/productos/cerebroCorp.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-1 lg:gap-3 px-3 lg:px-6 pb-3 lg:pb-6 items-center">
                <div className="text-center min-w-0 px-0.5">
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold text-white mb-0.5 leading-tight">ASISTENTE</p>
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold text-white leading-tight">CORPORATIVO</p>
                </div>
                <div className="text-center min-w-0 px-0.5">
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold mb-0.5 leading-tight" style={{ color: '#0EA5E9' }}>ONBOARDING</p>
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold leading-tight" style={{ color: '#0EA5E9' }}>ACELERADO</p>
                </div>
                <div className="text-center min-w-0 px-0.5">
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold mb-0.5 leading-tight" style={{ color: '#0284C7' }}>MULTI</p>
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold leading-tight" style={{ color: '#0284C7' }}>SUCURSAL</p>
                </div>
            </div>

            {/* Modal */}
            {showInfoModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4" onClick={closeModal}>
                    <div className="bg-[#1A1A2E] rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl" style={{ border: '2px solid #0EA5E94D' }} onClick={e => e.stopPropagation()}>
                        <div className="sticky top-0 p-6 flex items-center justify-between z-10" style={{ background: 'linear-gradient(to right, #0EA5E9, #0284C7)' }}>
                            <h2 className="text-2xl font-bold text-white">Cerebro Corporativo IA</h2>
                            <button onClick={closeModal} className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors" aria-label="Cerrar">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <p className="text-gray-300">Centraliza políticas, manuales, protocolos, FAQs y procesos en un asistente corporativo accesible por web o canales internos. Elimina el conocimiento disperso que genera errores operativos y onboarding lento.</p>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li className="flex items-center gap-2"><span style={{ color: '#0EA5E9' }}>✓</span> Asistente IA con conocimiento institucional</li>
                                <li className="flex items-center gap-2"><span style={{ color: '#0EA5E9' }}>✓</span> Respuestas consistentes en toda la organización</li>
                                <li className="flex items-center gap-2"><span style={{ color: '#0EA5E9' }}>✓</span> Onboarding acelerado para nuevos colaboradores</li>
                                <li className="flex items-center gap-2"><span style={{ color: '#0EA5E9' }}>✓</span> Integración por web o canales internos</li>
                            </ul>
                            <div className="flex gap-2 text-xs text-gray-500 pt-2">
                                <span className="px-2 py-1 rounded-full bg-white/5">Desde $90K MXN implementación</span>
                                <span className="px-2 py-1 rounded-full bg-white/5">$25K/mes recurrencia</span>
                            </div>
                            <button onClick={() => { closeModal(); handleAgendarCita(); }} className="w-full text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 will-change-transform" style={{ background: 'linear-gradient(to right, #0EA5E9, #0284C7)' }}>
                                Agendar Cotización
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CerebroCorporativoModule;