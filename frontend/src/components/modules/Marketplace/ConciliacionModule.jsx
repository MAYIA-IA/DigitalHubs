import { useState, useMemo, useCallback } from 'react'

const ConciliacionModule = ({ hoveredModule, moduleId }) => {
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
        borderColor: isHovered ? '#8B5CF6' : 'rgba(72, 129, 235, 0.1)',
        boxShadow: isHovered ? '0 0 30px rgba(139, 92, 246, 0.3)' : 'none',
        overflow: 'visible'
    }), [isHovered]);

    return (
        <div className="relative w-full h-full bg-[#0A0A14] rounded-3xl border-2 transition-[border-color,box-shadow] duration-300" style={containerStyle}>
            {/* Header */}
            <div className="flex items-center justify-between p-3 lg:p-6 pb-2 lg:pb-4">
                <div className="flex items-center gap-2 lg:gap-3">
                    <div className="relative w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full blur-xl" style={{ background: '#8B5CF633' }}></div>
                        <div className="relative w-10 h-10 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#8B5CF622,#7C3AED22)', border: '1.5px solid #8B5CF644' }}>
                            <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="#8B5CF6" viewBox="0 0 24 24" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                            </svg>
                        </div>
                    </div>
                    <div className="ml-1 lg:ml-3">
                        <h3 className="text-sm lg:text-xl font-bold text-white leading-tight">Conciliación Auto.</h3>
                        <p className="text-[9px] lg:text-sm text-gray-400 leading-tight">Ventas · Banco · ERP</p>
                    </div>
                </div>
                <div className="relative z-10">
                    <button onClick={toggleMenu} className="text-gray-400 hover:text-white transition-colors" aria-label="Abrir menú">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="5" r="1.5"/><circle cx="10" cy="10" r="1.5"/><circle cx="10" cy="15" r="1.5"/></svg>
                    </button>
                    {menuOpen && (
                        <>
                            <div className="fixed inset-0 z-30" onClick={closeMenu} aria-hidden="true"/>
                            <div className="absolute right-0 top-8 bg-[#1A1A2E] rounded-lg shadow-xl overflow-hidden z-40 min-w-[200px]" style={{ border: '1px solid #8B5CF633' }}>
                                <button onClick={handleAgendarCita} className="w-full px-4 py-3 text-left text-sm text-white transition-colors flex items-center gap-2" onMouseEnter={e => e.currentTarget.style.background='#8B5CF622'} onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    Agendar cita para cotización
                                </button>
                                <button onClick={handleMasInformacion} className="w-full px-4 py-3 text-left text-sm text-white transition-colors flex items-center gap-2" onMouseEnter={e => e.currentTarget.style.background='#8B5CF622'} onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    Más información
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Image Area */}
            <div className="relative mx-3 lg:mx-6 mb-3 lg:mb-6 rounded-2xl overflow-hidden h-[180px] lg:h-[350px] flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#0A0A14,#8B5CF611)', border: '1px dashed #8B5CF633' }}>
                <img src="/assets/images/productos/contenidoConciliacion.jpg" alt="Conciliación Auto." className="w-full h-full object-contain" loading="lazy" onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
                <div style={{display:'none'}} className="w-full h-full items-center justify-center flex-col gap-2">
                    <svg className="w-16 h-16 opacity-20" fill="none" stroke="#8B5CF6" viewBox="0 0 24 24" strokeWidth={0.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>
                    <span className="text-xs text-gray-600">contenidoConciliacion.jpg</span>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-1 lg:gap-3 px-3 lg:px-6 pb-3 lg:pb-6 items-center">
                <div className="text-center min-w-0 px-0.5">
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold text-white mb-0.5 leading-tight">REGLAS</p>
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold text-white leading-tight">PERSONALIZADAS</p>
                </div>
                <div className="text-center min-w-0 px-0.5">
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold mb-0.5 leading-tight" style={{ color: '#8B5CF6' }}>VENTAS VS</p>
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold leading-tight" style={{ color: '#8B5CF6' }}>BANCO VS ERP</p>
                </div>
                <div className="text-center min-w-0 px-0.5">
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold mb-0.5 leading-tight" style={{ color: '#7C3AED' }}>REPORTES</p>
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold leading-tight" style={{ color: '#7C3AED' }}>AUTOMÁTICOS</p>
                </div>
            </div>

            {/* Modal */}
            {showInfoModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4" onClick={closeModal}>
                    <div className="bg-[#1A1A2E] rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl" style={{ border: '2px solid #8B5CF64D' }} onClick={e => e.stopPropagation()}>
                        <div className="sticky top-0 p-6 flex items-center justify-between z-10" style={{ background: 'linear-gradient(to right, #8B5CF6, #7C3AED)' }}>
                            <h2 className="text-2xl font-bold text-white">Conciliación Auto.</h2>
                            <button onClick={closeModal} className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors" aria-label="Cerrar">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <p className="text-gray-300">Generación automática de conciliaciones con reglas específicas cruzando Ventas, Banco y ERP. Detecta discrepancias y genera reportes listos para auditoría.</p>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li className="flex items-center gap-2"><span style={{ color: '#8B5CF6' }}>✓</span> Cruce Ventas vs Banco vs ERP</li>
                                <li className="flex items-center gap-2"><span style={{ color: '#8B5CF6' }}>✓</span> Reglas de negocio configurables</li>
                                <li className="flex items-center gap-2"><span style={{ color: '#8B5CF6' }}>✓</span> Detección automática de discrepancias</li>
                                <li className="flex items-center gap-2"><span style={{ color: '#8B5CF6' }}>✓</span> Reportes exportables para auditoría</li>
                            </ul>
                            <button onClick={() => { closeModal(); handleAgendarCita(); }} className="w-full text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 will-change-transform" style={{ background: 'linear-gradient(to right, #8B5CF6, #7C3AED)' }}>
                                Agendar Cotización
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ConciliacionModule;