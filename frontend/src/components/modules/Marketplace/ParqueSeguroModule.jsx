import { useState, useMemo, useCallback, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const ParqueSeguroModule = ({ hoveredModule, moduleId }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showInfoModal, setShowInfoModal] = useState(false);
    const alertsRef = useRef([]);
    const scanLineRef = useRef(null);
    
    const calendlyUrl = "https://calendly.com/tu-usuario/cotizacion";
    
    const isHovered = useMemo(() => hoveredModule === moduleId, [hoveredModule, moduleId]);
    
    // Características específicas de Parque Seguro
    const features = [
        "DETECCIÓN DE AGLOMERACIONES",
        "IDENTIFICACIÓN DE MERODEOS SOSPECHOSOS",
        "CONTEO INTELIGENTE DE PERSONAS",
        "DETECCIÓN DE OBJETOS OLVIDADOS",
        "POSTE GUARDIA INTELIGENTE",
        "ALERTA AUTOMÁTICA A AUTORIDADES"
    ];
    
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
        borderColor: isHovered ? '#14B8A6' : 'rgba(20, 184, 166, 0.1)',
        boxShadow: isHovered ? '0 0 30px rgba(20, 184, 166, 0.3)' : 'none'
    }), [isHovered]);
    
    useEffect(() => {
        // Animación sutil de aparición con fade
        gsap.fromTo(
            alertsRef.current,
            {
                opacity: 0,
                y: 10
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: "power2.out"
            }
        );

        // Línea de escaneo que recorre el video
        if (scanLineRef.current) {
            gsap.fromTo(
                scanLineRef.current,
                {
                    top: '0%',
                    opacity: 0.6
                },
                {
                    top: '100%',
                    opacity: 0.3,
                    duration: 3,
                    repeat: -1,
                    ease: "none"
                }
            );
        }

    }, []);
    
    return (
        <div 
            className="relative w-full h-full bg-[#0A0A14] rounded-3xl border-2 transition-all duration-500"
            style={{
                borderColor: hoveredModule === moduleId ? '#14B8A6' : 'rgba(72, 129, 235, 0.1)',
                boxShadow: hoveredModule === moduleId ? '0 0 30px rgba(20, 184, 166, 0.3)' : 'none',
                overflow: 'visible'
            }}>
            {/* Header con botones actualizados */}
            <div className="flex items-center justify-between p-6 pb-4 relative z-20">
                <div className="flex items-center gap-3">
                    {/* Contenedor del icono familia con efecto 3D flotante */}
                    <div className="relative w-16 h-16">
                        {/* Icono principal - sale del recuadro */}
                        <div className="absolute -top-2 -left-2 w-20 h-20 animate-float-family">
                            <img 
                                src="public/assets/images/familia.png" 
                                alt="Parque Seguro" 
                                className="w-full h-full object-contain drop-shadow-2xl"
                                style={{
                                    filter: 'drop-shadow(0 10px 30px rgba(20, 184, 166, 0.6)) drop-shadow(0 0 20px rgba(8, 145, 178, 0.4))'
                                }}
                            />
                        </div>
                        
                        {/* Efecto de resplandor detrás del icono */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-[#14B8A6]/40 to-[#0891B2]/40 rounded-full blur-xl animate-pulse"></div>
                    </div>
                    
                    <div className="ml-6">
                        <h3 className="text-xl font-bold text-white">Parque Seguro</h3>
                        <p className="text-sm text-gray-400">Monitoreo Inteligente</p>
                    </div>
                </div>
                
                {/* Botones actualizados al mismo estilo que SocModule */}
                <div className="relative z-30">
                    <button 
                        onClick={toggleMenu}
                        className="text-gray-400 hover:text-white transition-colors relative z-30"
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
                            <div className="absolute right-0 top-8 bg-[#1A1A2E] rounded-lg shadow-xl border border-[#14B8A6]/20 overflow-hidden z-40 min-w-[200px]">
                                <button 
                                    onClick={handleAgendarCita}
                                    className="w-full px-4 py-3 text-left text-sm text-white hover:bg-[#14B8A6]/20 transition-colors flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Agendar cita para cotización
                                </button>
                                <button 
                                    onClick={handleMasInformacion}
                                    className="w-full px-4 py-3 text-left text-sm text-white hover:bg-[#14B8A6]/20 transition-colors flex items-center gap-2"
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

            {/* Content Area - Video + Info Panel con estilo Neón */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 px-4 md:px-6 mb-4 md:mb-6">
                {/* Video Area con línea de escaneo */}
                <div className="relative rounded-2xl overflow-hidden w-full md:w-[200px] h-[200px] md:h-[350px] md:flex-shrink-0">
                    <video 
                        src="public/assets/images/productos/ParqueSeguro.mp4" 
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                    {/* Línea de escaneo */}
                    <div 
                        ref={scanLineRef}
                        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                        style={{ boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)' }}
                    />
                    {/* Esquinas de enfoque */}
                    <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400"></div>
                    <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400"></div>
                    <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400"></div>
                    <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-400"></div>
                </div>

                {/* Info Panel - Estilo Neón como la imagen */}
                <div className="flex-1 flex flex-col justify-center gap-1.5 sm:gap-2 bg-black/40 rounded-2xl p-2 sm:p-3">
                    {/* AGLOMERACIÓN - Verde neón */}
                    <div 
                        ref={el => alertsRef.current[0] = el}
                        className="neon-box neon-green"
                    >
                        <p className="neon-text-green">AGLOMERACIÓN</p>
                    </div>

                    {/* ALERTA MERODEOS - Rojo neón */}
                    <div 
                        ref={el => alertsRef.current[1] = el}
                        className="neon-box neon-red"
                    >
                        <div className="flex items-center justify-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                            <p className="neon-text-red">ALERTA MERODEOS</p>
                        </div>
                    </div>

                    {/* Contador de personas - Tarjetas neón */}
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 my-0.5 sm:my-1">
                        {/* MUJERES - Rosa neón */}
                        <div 
                            ref={el => alertsRef.current[2] = el}
                            className="neon-card neon-pink"
                        >
                            <p className="neon-label-pink">MUJERES</p>
                            <p className="neon-number-pink">1</p>
                        </div>

                        {/* HOMBRES - Azul neón */}
                        <div 
                            ref={el => alertsRef.current[3] = el}
                            className="neon-card neon-blue"
                        >
                            <p className="neon-label-blue">HOMBRES</p>
                            <p className="neon-number-blue">6</p>
                        </div>

                        {/* NIÑOS - Verde neón */}
                        <div 
                            ref={el => alertsRef.current[4] = el}
                            className="neon-card neon-green-card"
                        >
                            <p className="neon-label-green">NIÑOS</p>
                            <p className="neon-number-green">1</p>
                        </div>
                    </div>

                    {/* OBJETOS OLVIDADOS - Rojo neón */}
                    <div 
                        ref={el => alertsRef.current[5] = el}
                        className="neon-box neon-red"
                    >
                        <div className="flex items-center justify-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                            <p className="neon-text-red">OBJETOS OLVIDADOS</p>
                        </div>
                    </div>

                    {/* Info adicional */}
                    <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[8px] sm:text-[10px] mt-0.5 sm:mt-1">
                        <div className="text-gray-400 bg-gray-800/30 rounded px-1.5 py-1 sm:px-2 sm:py-1.5 border border-gray-700/30">
                            <p className="font-semibold text-gray-300 leading-tight">POSTE</p>
                            <p className="text-gray-400 leading-tight">GUARDIA</p>
                            <p className="text-gray-400 leading-tight">INTELIGENTE</p>
                        </div>
                        <div className="text-gray-400 bg-gray-800/30 rounded px-1.5 py-1 sm:px-2 sm:py-1.5 border border-gray-700/30">
                            <p className="font-semibold text-gray-300 leading-tight">Monitoreo</p>
                            <p className="text-gray-400 leading-tight">En FLAI la nube</p>
                            <p className="text-gray-400 leading-tight">soberana</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats - Bottom section */}
            <div className="grid grid-cols-3 gap-2 px-4 sm:px-6 pb-6">
                <div className="text-center min-w-0">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">32+</p>
                    <p className="text-[10px] sm:text-xs text-gray-400">Eventos detectados</p>
                </div>
                <div className="text-center min-w-0">
                    <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-[#14B8A6] mb-1">Analítica</p>
                    <p className="text-[10px] sm:text-xs text-gray-400">Inteligente en tiempo real</p>
                </div>
                <div className="text-center min-w-0">
                    <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-[#0891B2] mb-1">Alerta</p>
                    <p className="text-[10px] sm:text-xs text-gray-400">Automática a autoridades</p>
                </div>
            </div>

            {/* Modal de Información actualizado con info de Parque Seguro */}
            {showInfoModal && (
                <div 
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4" 
                    onClick={closeModal}
                >
                    <div 
                        className="bg-[#1A1A2E] rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border-2 border-[#14B8A6]/30 shadow-2xl" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="sticky top-0 bg-gradient-to-r from-[#14B8A6] to-[#0891B2] p-6 flex items-center justify-between z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-2">
                                    <img 
                                        src="public/assets/images/familia.png" 
                                        alt="Parque Seguro" 
                                        className="w-full h-full object-contain"
                                        loading="lazy"
                                    />
                                </div>
                                <h2 className="text-2xl font-bold text-white">Parque Seguro</h2>
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

                        <div className="p-6 space-y-6">
                            <div>
                                <p className="text-gray-300 leading-relaxed">
                                    <span className="font-bold text-[#14B8A6]">Parque Seguro</span> es un sistema de monitoreo inteligente que utiliza visión por computadora e IA para garantizar la seguridad en espacios públicos. Detecta aglomeraciones, merodeos sospechosos, objetos olvidados y genera alertas automáticas en tiempo real.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="bg-[#0A0A14] rounded-xl p-4 border border-[#14B8A6]/20">
                                        <p className="text-[#14B8A6] font-semibold">{feature}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gradient-to-br from-[#0A0A14] to-[#1A1A2E] rounded-xl p-4 border border-[#0891B2]/20">
                                <h3 className="text-lg font-bold text-white mb-2">Tecnología Utilizada</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Visión por Computadora', 'Inteligencia Artificial', 'Análisis de Comportamiento', 'Detección de Objetos', 'Procesamiento en la Nube Soberana FLAI'].map((tech) => (
                                        <span key={tech} className="text-xs font-semibold px-3 py-1.5 bg-gradient-to-r from-[#14B8A6]/30 to-[#0891B2]/20 text-white rounded-full border border-[#14B8A6]/50">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <button 
                                onClick={() => {
                                    closeModal();
                                    handleAgendarCita();
                                }}
                                className="w-full bg-gradient-to-r from-[#14B8A6] to-[#0891B2] text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 will-change-transform"
                            >
                                Agendar Demostración
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* CSS para efectos neón y animaciones */}
            <style jsx>{`
                /* Animación flotante para el icono familia */
                @keyframes floatFamily {
                    0%, 100% {
                        transform: translateY(0px) scale(1);
                    }
                    50% {
                        transform: translateY(-10px) scale(1.05);
                    }
                }

                .animate-float-family {
                    animation: floatFamily 3s ease-in-out infinite;
                }

                /* Cajas de alerta estilo neón */
                .neon-box {
                    border-radius: 8px;
                    padding: 6px 8px;
                    text-align: center;
                    font-weight: bold;
                    font-size: 9px;
                    letter-spacing: 0.3px;
                    position: relative;
                    overflow: hidden;
                }

                @media (min-width: 640px) {
                    .neon-box {
                        padding: 8px 14px;
                        font-size: 11px;
                        letter-spacing: 0.5px;
                    }
                }

                /* Verde neón */
                .neon-green {
                    background: rgba(0, 0, 0, 0.8);
                    border: 2px solid #00ff00;
                    box-shadow: 
                        0 0 8px #00ff00,
                        0 0 15px #00ff00,
                        inset 0 0 8px rgba(0, 255, 0, 0.2);
                }

                .neon-text-green {
                    color: #00ff00;
                    text-shadow: 
                        0 0 5px #00ff00,
                        0 0 10px #00ff00,
                        0 0 15px #00ff00;
                }

                /* Rojo neón */
                .neon-red {
                    background: rgba(0, 0, 0, 0.8);
                    border: 2px solid #ff0040;
                    box-shadow: 
                        0 0 8px #ff0040,
                        0 0 15px #ff0040,
                        inset 0 0 8px rgba(255, 0, 64, 0.2);
                }

                .neon-text-red {
                    color: #ff0040;
                    text-shadow: 
                        0 0 5px #ff0040,
                        0 0 10px #ff0040,
                        0 0 15px #ff0040;
                }

                /* Tarjetas de contador */
                .neon-card {
                    border-radius: 6px;
                    padding: 4px 3px;
                    text-align: center;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-width: 0;
                }

                @media (min-width: 640px) {
                    .neon-card {
                        border-radius: 8px;
                        padding: 8px 6px;
                    }
                }

                /* Rosa neón */
                .neon-pink {
                    border: 2px solid #ff00ff;
                    box-shadow: 
                        0 0 8px #ff00ff,
                        0 0 15px #ff00ff,
                        inset 0 0 8px rgba(255, 0, 255, 0.2);
                }

                .neon-label-pink {
                    color: #ff00ff;
                    font-size: 7px;
                    font-weight: bold;
                    letter-spacing: 0.3px;
                    margin-bottom: 2px;
                    text-shadow: 
                        0 0 5px #ff00ff,
                        0 0 8px #ff00ff;
                }

                @media (min-width: 640px) {
                    .neon-label-pink {
                        font-size: 8px;
                        letter-spacing: 0.5px;
                        margin-bottom: 3px;
                    }
                }

                .neon-number-pink {
                    color: #ff00ff;
                    font-size: 18px;
                    font-weight: bold;
                    text-shadow: 
                        0 0 8px #ff00ff,
                        0 0 15px #ff00ff;
                }

                @media (min-width: 640px) {
                    .neon-number-pink {
                        font-size: 24px;
                    }
                }

                /* Azul neón */
                .neon-blue {
                    border: 2px solid #00d4ff;
                    box-shadow: 
                        0 0 8px #00d4ff,
                        0 0 15px #00d4ff,
                        inset 0 0 8px rgba(0, 212, 255, 0.2);
                }

                .neon-label-blue {
                    color: #00d4ff;
                    font-size: 7px;
                    font-weight: bold;
                    letter-spacing: 0.3px;
                    margin-bottom: 2px;
                    text-shadow: 
                        0 0 5px #00d4ff,
                        0 0 8px #00d4ff;
                }

                @media (min-width: 640px) {
                    .neon-label-blue {
                        font-size: 8px;
                        letter-spacing: 0.5px;
                        margin-bottom: 3px;
                    }
                }

                .neon-number-blue {
                    color: #00d4ff;
                    font-size: 18px;
                    font-weight: bold;
                    text-shadow: 
                        0 0 8px #00d4ff,
                        0 0 15px #00d4ff;
                }

                @media (min-width: 640px) {
                    .neon-number-blue {
                        font-size: 24px;
                    }
                }

                /* Verde neón (para NIÑOS) */
                .neon-green-card {
                    border: 2px solid #00ff00;
                    box-shadow: 
                        0 0 8px #00ff00,
                        0 0 15px #00ff00,
                        inset 0 0 8px rgba(0, 255, 0, 0.2);
                }

                .neon-label-green {
                    color: #00ff00;
                    font-size: 7px;
                    font-weight: bold;
                    letter-spacing: 0.3px;
                    margin-bottom: 2px;
                    text-shadow: 
                        0 0 5px #00ff00,
                        0 0 8px #00ff00;
                }

                @media (min-width: 640px) {
                    .neon-label-green {
                        font-size: 8px;
                        letter-spacing: 0.5px;
                        margin-bottom: 3px;
                    }
                }

                .neon-number-green {
                    color: #00ff00;
                    font-size: 18px;
                    font-weight: bold;
                    text-shadow: 
                        0 0 8px #00ff00,
                        0 0 15px #00ff00;
                }

                @media (min-width: 640px) {
                    .neon-number-green {
                        font-size: 24px;
                    }
                }
            `}</style>
        </div>
    );
};

export default ParqueSeguroModule;