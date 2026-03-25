import { useState, useMemo, useCallback } from 'react'

const ControllistaModule = ({ hoveredModule, moduleId }) => {
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
        borderColor: isHovered ? '#F43F5E' : 'rgba(72, 129, 235, 0.1)',
        boxShadow: isHovered ? '0 0 30px rgba(244, 63, 94, 0.3)' : 'none',
        overflow: 'visible'
    }), [isHovered]);

    return (
        <div className="relative w-full h-full bg-[#0A0A14] rounded-3xl border-2 transition-[border-color,box-shadow] duration-300" style={containerStyle}>
            {/* Header */}
            <div className="flex items-center justify-between p-3 lg:p-6 pb-2 lg:pb-4">
                <div className="flex items-center gap-2 lg:gap-3">
                    <div className="relative w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full blur-xl" style={{ background: '#F43F5E33' }}></div>
                        <div className="relative w-10 h-10 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#F43F5E22,#E1113322)', border: '1.5px solid #F43F5E44' }}>
                            <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="#F43F5E" viewBox="0 0 24 24" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>
                        </div>
                    </div>
                    <div className="ml-1 lg:ml-3">
                        <h3 className="text-sm lg:text-xl font-bold text-white leading-tight">Controlista IA</h3>
                        <p className="text-[9px] lg:text-sm text-gray-400 leading-tight">Cumplimiento · Terceros · Auditoría</p>
                    </div>
                </div>
                <div className="relative z-10">
                    <button onClick={toggleMenu} className="text-gray-400 hover:text-white transition-colors" aria-label="Abrir menú">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="5" r="1.5"/><circle cx="10" cy="10" r="1.5"/><circle cx="10" cy="15" r="1.5"/></svg>
                    </button>
                    {menuOpen && (
                        <>
                            <div className="fixed inset-0 z-30" onClick={closeMenu} aria-hidden="true"/>
                            <div className="absolute right-0 top-8 bg-[#1A1A2E] rounded-lg shadow-xl overflow-hidden z-40 min-w-[200px]" style={{ border: '1px solid #F43F5E33' }}>
                                <button onClick={handleAgendarCita} className="w-full px-4 py-3 text-left text-sm text-white transition-colors flex items-center gap-2" onMouseEnter={e => e.currentTarget.style.background='#F43F5E22'} onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    Agendar cita para cotización
                                </button>
                                <button onClick={handleMasInformacion} className="w-full px-4 py-3 text-left text-sm text-white transition-colors flex items-center gap-2" onMouseEnter={e => e.currentTarget.style.background='#F43F5E22'} onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    Más información
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Video Area */}
            <div className="relative mx-3 lg:mx-6 mb-3 lg:mb-6 rounded-2xl overflow-hidden h-[180px] lg:h-[350px] flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#0A0A14,#F43F5E11)', border: '1px dashed #F43F5E33' }}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                >
                    {/* 🎬 REEMPLAZA ESTA RUTA CON TU VIDEO */}
                    <source src="/assets/images/productos/controllistaIA.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-1 lg:gap-3 px-3 lg:px-6 pb-3 lg:pb-6 items-center">
                <div className="text-center min-w-0 px-0.5">
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold text-white mb-0.5 leading-tight">CONTROL DE</p>
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold text-white leading-tight">TERCEROS</p>
                </div>
                <div className="text-center min-w-0 px-0.5">
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold mb-0.5 leading-tight" style={{ color: '#F43F5E' }}>ALERTAS DE</p>
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold leading-tight" style={{ color: '#F43F5E' }}>VENCIMIENTOS</p>
                </div>
                <div className="text-center min-w-0 px-0.5">
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold mb-0.5 leading-tight" style={{ color: '#E11D48' }}>FLUJO</p>
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold leading-tight" style={{ color: '#E11D48' }}>AUDITABLE</p>
                </div>
            </div>

            {/* Modal */}
            {showInfoModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4" onClick={closeModal}>
                    <div className="bg-[#1A1A2E] rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl" style={{ border: '2px solid #F43F5E4D' }} onClick={e => e.stopPropagation()}>
                        <div className="sticky top-0 p-6 flex items-center justify-between z-10" style={{ background: 'linear-gradient(to right, #F43F5E, #E11D48)' }}>
                            <h2 className="text-2xl font-bold text-white">Controlista IA</h2>
                            <button onClick={closeModal} className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors" aria-label="Cerrar">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <p className="text-gray-300">Torre de control de contratistas, proveedores críticos y cumplimiento operativo. Centraliza expedientes, gestiona vencimientos con alertas automáticas y mantiene un flujo completamente auditable.</p>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li className="flex items-center gap-2"><span style={{ color: '#F43F5E' }}>✓</span> Expedientes de terceros centralizados</li>
                                <li className="flex items-center gap-2"><span style={{ color: '#F43F5E' }}>✓</span> Alertas automáticas de vencimientos críticos</li>
                                <li className="flex items-center gap-2"><span style={{ color: '#F43F5E' }}>✓</span> Trazabilidad completa de evidencias e incidencias</li>
                                <li className="flex items-center gap-2"><span style={{ color: '#F43F5E' }}>✓</span> Reportes listos para auditoría</li>
                            </ul>
                            <div className="flex gap-2 text-xs text-gray-500 pt-2">
                                <span className="px-2 py-1 rounded-full bg-white/5">Desde $120K MXN implementación</span>
                                <span className="px-2 py-1 rounded-full bg-white/5">$35K–$90K/mes recurrencia</span>
                            </div>
                            <button onClick={() => { closeModal(); handleAgendarCita(); }} className="w-full text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 will-change-transform" style={{ background: 'linear-gradient(to right, #F43F5E, #E11D48)' }}>
                                Agendar Cotización
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ControllistaModule;