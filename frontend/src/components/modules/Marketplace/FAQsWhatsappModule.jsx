import { useState, useMemo, useCallback } from 'react'

const FAQsWhatsAppModule = ({ hoveredModule, moduleId }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showInfoModal, setShowInfoModal] = useState(false);
    const calendlyUrl = "https://calendly.com/tu-usuario/cotizacion";
    const isHovered = useMemo(() => hoveredModule === moduleId, [hoveredModule, moduleId]);
    const handleAgendarCita = useCallback(() => { window.open(calendlyUrl, '_blank', 'width=800,height=800'); setMenuOpen(false); }, [calendlyUrl]);
    const handleMasInformacion = useCallback(() => { setShowInfoModal(true); setMenuOpen(false); }, []);
    const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);
    const closeMenu = useCallback(() => setMenuOpen(false), []);
    const closeModal = useCallback(() => setShowInfoModal(false), []);
    const accentColor = '#25D366';
    const accentSecondary = '#128C7E';
    const containerStyle = useMemo(() => ({
        borderColor: isHovered ? accentColor : 'rgba(72, 129, 235, 0.1)',
        boxShadow: isHovered ? '0 0 30px rgba(37, 211, 102, 0.3)' : 'none',
        overflow: 'visible'
    }), [isHovered]);

    return (
        <div className="relative w-full h-full bg-[#0A0A14] rounded-3xl border-2 transition-[border-color,box-shadow] duration-300" style={containerStyle}>
            <div className="flex items-center justify-between p-3 lg:p-6 pb-2 lg:pb-4">
                <div className="flex items-center gap-2 lg:gap-3">
                    <div className="relative w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full blur-xl" style={{ background: '#25D36633' }}></div>
                        <div className="relative w-10 h-10 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#25D36622,#128C7E22)', border: '1.5px solid #25D36644' }}>
                            <svg className="w-6 h-6 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="#25D366">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="ml-1 lg:ml-3">
                        <h3 className="text-sm lg:text-xl font-bold text-white leading-tight">FAQs WhatsApp</h3>
                        <p className="text-[9px] lg:text-sm text-gray-400 leading-tight">Automatización empresarial</p>
                    </div>
                </div>
                <div className="relative z-10">
                    <button onClick={toggleMenu} className="text-gray-400 hover:text-white transition-colors" aria-label="Abrir menú">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="5" r="1.5"/><circle cx="10" cy="10" r="1.5"/><circle cx="10" cy="15" r="1.5"/></svg>
                    </button>
                    {menuOpen && (
                        <>
                            <div className="fixed inset-0 z-30" onClick={closeMenu} aria-hidden="true"/>
                            <div className="absolute right-0 top-8 bg-[#1A1A2E] rounded-lg shadow-xl border border-[#25D366]/20 overflow-hidden z-40 min-w-[200px]">
                                <button onClick={handleAgendarCita} className="w-full px-4 py-3 text-left text-sm text-white hover:bg-[#25D366]/20 transition-colors flex items-center gap-2">
                                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    Agendar cita para cotización
                                </button>
                                <button onClick={handleMasInformacion} className="w-full px-4 py-3 text-left text-sm text-white hover:bg-[#25D366]/20 transition-colors flex items-center gap-2">
                                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    Más información
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className="relative mx-3 lg:mx-6 mb-3 lg:mb-6 rounded-2xl overflow-hidden h-[180px] lg:h-[350px] flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#0A0A14,#25D36611)', border: '1px dashed #25D36633' }}>
                <img src="/assets/images/productos/contenidoFAQsWhatsApp.jpg" alt="FAQs WhatsApp" className="w-full h-full object-contain" loading="lazy" onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
                <div style={{display:'none'}} className="w-full h-full items-center justify-center flex-col gap-2">
                    <svg className="w-16 h-16 opacity-20" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    <span className="text-xs text-gray-600">contenidoFAQsWhatsApp.jpg</span>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-1 lg:gap-3 px-3 lg:px-6 pb-3 lg:pb-6 items-center">
                <div className="text-center min-w-0 px-0.5">
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold text-white mb-0.5 leading-tight">SIN LLM</p>
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold text-white leading-tight">REQUERIDO</p>
                </div>
                <div className="text-center min-w-0 px-0.5">
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold text-[#25D366] mb-0.5 leading-tight">BAJO</p>
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold text-[#25D366] leading-tight">COSTO</p>
                </div>
                <div className="text-center min-w-0 px-0.5">
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold text-[#128C7E] mb-0.5 leading-tight">RESPUESTAS</p>
                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold text-[#128C7E] leading-tight">AUTOMÁTICAS</p>
                </div>
            </div>
            {showInfoModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4" onClick={closeModal}>
                    <div className="bg-[#1A1A2E] rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border-2 border-[#25D366]/30 shadow-2xl" onClick={e => e.stopPropagation()}>
                        <div className="sticky top-0 bg-gradient-to-r from-[#25D366] to-[#128C7E] p-6 flex items-center justify-between z-10">
                            <h2 className="text-2xl font-bold text-white">FAQs WhatsApp</h2>
                            <button onClick={closeModal} className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors" aria-label="Cerrar">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <p className="text-gray-300">Automatiza las respuestas a preguntas frecuentes de tu empresa a través de WhatsApp Business. Sin necesidad de modelos de lenguaje complejos, manteniendo costos bajos y disponibilidad 24/7.</p>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li className="flex items-center gap-2"><span className="text-[#25D366]">✓</span> Respuestas instantáneas sin intervención humana</li>
                                <li className="flex items-center gap-2"><span className="text-[#25D366]">✓</span> Base de conocimiento personalizable</li>
                                <li className="flex items-center gap-2"><span className="text-[#25D366]">✓</span> Escalamiento a agente humano cuando se requiere</li>
                                <li className="flex items-center gap-2"><span className="text-[#25D366]">✓</span> Bajo costo operativo mensual</li>
                            </ul>
                            <button onClick={() => { closeModal(); handleAgendarCita(); }} className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 will-change-transform">Agendar Cotización</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FAQsWhatsAppModule;