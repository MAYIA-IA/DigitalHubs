import { useState, useMemo, useCallback } from 'react'

const AcademiaModule = ({ hoveredModule, moduleId }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [cursosOpen, setCursosOpen] = useState(false);
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
    const toggleCursos = useCallback(() => setCursosOpen(prev => !prev), []);
    const closeMenu = useCallback(() => setMenuOpen(false), []);
    const closeModal = useCallback(() => setShowInfoModal(false), []);
    
    const containerStyle = useMemo(() => ({
        borderColor: isHovered ? '#00913f' : 'rgba(72, 129, 235, 0.1)',
        boxShadow: isHovered ? '0 0 30px rgba(20, 184, 166, 0.3)' : 'none',
        overflow: 'visible'
    }), [isHovered]);

    const cursos = [
        // Gestión y Liderazgo
        { titulo: "Fundamentos del Prompting", nivel: "PRINCIPIANTE", horas: "4h", categoria: "Gestión" },
        { titulo: "IA para Trabajo Inteligente", nivel: "INTERMEDIO", horas: "25h", categoria: "Gestión" },
        { titulo: "Comunicación Efectiva en Equipo", nivel: "INTERMEDIO", horas: "10h", categoria: "Gestión" },
        { titulo: "Priorización y Delegación", nivel: "INTERMEDIO", horas: "10h", categoria: "Gestión" },
        { titulo: "IA para Gerentes", nivel: "AVANZADO", horas: "30h", categoria: "Gestión" },
        { titulo: "Gestión del Cambio", nivel: "AVANZADO", horas: "20h", categoria: "Gestión" },
        { titulo: "Toma de Decisiones Estratégicas", nivel: "AVANZADO", horas: "15h", categoria: "Gestión" },
        { titulo: "Optimización de Procesos", nivel: "AVANZADO", horas: "25h", categoria: "Gestión" },
        { titulo: "Desarrollo de Talento Humano", nivel: "AVANZADO", horas: "20h", categoria: "Gestión" },
        
        // Desarrollo y Programación
        { titulo: "Programación Asistida por IA", nivel: "INTERMEDIO", horas: "30h", categoria: "Desarrollo" },
        { titulo: "Django REST Framework", nivel: "AVANZADO", horas: "40h", categoria: "Desarrollo" },
        { titulo: "Python Fundamentos", nivel: "PRINCIPIANTE", horas: "35h", categoria: "Desarrollo" },
        { titulo: "Django Web Development", nivel: "INTERMEDIO", horas: "45h", categoria: "Desarrollo" },
        { titulo: "Docker para Python", nivel: "INTERMEDIO", horas: "20h", categoria: "Desarrollo" },
        { titulo: "Fundamentos de LLMs", nivel: "AVANZADO", horas: "50h", categoria: "Desarrollo" },
        { titulo: "Flask Web Apps", nivel: "INTERMEDIO", horas: "30h", categoria: "Desarrollo" },
        
        // Bases de Datos
        { titulo: "SQL Básico", nivel: "PRINCIPIANTE", horas: "15h", categoria: "Datos" },
        { titulo: "SQL Avanzado", nivel: "AVANZADO", horas: "25h", categoria: "Datos" },
        
        // Machine Learning y Análisis
        { titulo: "Machine Learning Fundamentos", nivel: "INTERMEDIO", horas: "40h", categoria: "ML & AI" },
        { titulo: "Computer Vision", nivel: "AVANZADO", horas: "45h", categoria: "ML & AI" },
        { titulo: "Tableau Visualización", nivel: "INTERMEDIO", horas: "20h", categoria: "ML & AI" },
        { titulo: "Data Wrangling", nivel: "INTERMEDIO", horas: "25h", categoria: "ML & AI" },
        { titulo: "Álgebra Lineal", nivel: "AVANZADO", horas: "30h", categoria: "ML & AI" },
        { titulo: "ML para Textos", nivel: "AVANZADO", horas: "35h", categoria: "ML & AI" },
        { titulo: "ML para Negocios", nivel: "AVANZADO", horas: "30h", categoria: "ML & AI" },
        { titulo: "Métodos Numéricos en ML", nivel: "AVANZADO", horas: "40h", categoria: "ML & AI" },
        { titulo: "Análisis Estadístico", nivel: "INTERMEDIO", horas: "30h", categoria: "ML & AI" },
        { titulo: "Aprendizaje Supervisado", nivel: "AVANZADO", horas: "45h", categoria: "ML & AI" },
        { titulo: "Python para Análisis", nivel: "PRINCIPIANTE", horas: "25h", categoria: "ML & AI" },
        { titulo: "Series Temporales", nivel: "AVANZADO", horas: "35h", categoria: "ML & AI" },
        { titulo: "Aprendizaje No Supervisado", nivel: "AVANZADO", horas: "40h", categoria: "ML & AI" },
        
        // Habilidades Blandas
        { titulo: "Habilidades Blandas", nivel: "PRINCIPIANTE", horas: "15h", categoria: "Soft Skills" },
    ];

    const getNivelColor = (nivel) => {
        switch(nivel) {
            case 'PRINCIPIANTE': return 'text-green-400 bg-green-400/10 border-green-400/20';
            case 'INTERMEDIO': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
            case 'AVANZADO': return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
            default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
        }
    };
    
    return (
        <div 
            className="relative w-full h-full bg-[#0A0A14] rounded-3xl border-2 transition-[border-color,box-shadow] duration-300"
            style={containerStyle}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-3 lg:p-6 pb-2 lg:pb-4">
                <div className="flex items-center gap-2 lg:gap-3">
                    <div className="relative w-10 h-10 lg:w-16 lg:h-16">
                        <div className="absolute -top-2 -left-2 w-14 h-14 lg:w-20 lg:h-20 animate-float">
                            <img 
                                src="/assets/images/astronauta.png" 
                                alt="Academia Astronauta" 
                                className="w-full h-full object-contain drop-shadow-2xl"
                                style={{
                                    filter: 'drop-shadow(0 10px 30px rgba(0, 145, 63, 0.6)) drop-shadow(0 0 20px rgba(20, 184, 166, 0.4))'
                                }}
                                loading="lazy"
                            />
                        </div>
                        
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-br from-[#00913f]/40 to-[#14B8A6]/40 rounded-full blur-xl"></div>
                    </div>
                    
                    <div className="ml-2 lg:ml-6">
                        <h3 className="text-sm lg:text-xl font-bold text-white leading-tight">Academia Mayia</h3>
                        <p className="text-[9px] lg:text-sm text-gray-400 leading-tight">32 cursos de IA</p>
                    </div>
                </div>
                
                <div className="relative z-10">
                    <button 
                        onClick={toggleMenu}
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Abrir menú"
                    >
                        <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 20 20">
                            <circle cx="10" cy="5" r="1.5"/>
                            <circle cx="10" cy="10" r="1.5"/>
                            <circle cx="10" cy="15" r="1.5"/>
                        </svg>
                    </button>
                    
                    {menuOpen && (
                        <>
                            <div className="fixed inset-0 z-30" onClick={closeMenu} aria-hidden="true"/>
                            <div className="absolute right-0 top-8 bg-[#1A1A2E] rounded-lg shadow-xl border border-[#00913f]/20 overflow-hidden z-40 min-w-[200px]">
                                <button 
                                    onClick={handleAgendarCita}
                                    className="w-full px-4 py-3 text-left text-sm text-white hover:bg-[#00913f]/20 transition-colors flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Agendar cita para cotización
                                </button>
                                <button 
                                    onClick={handleMasInformacion}
                                    className="w-full px-4 py-3 text-left text-sm text-white hover:bg-[#00913f]/20 transition-colors flex items-center gap-2"
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

            {/* Content Area */}
            <div className="relative mx-3 lg:mx-6 mb-3 lg:mb-6 rounded-2xl overflow-hidden h-[180px] lg:h-[350px]">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                >
                    <source src="/assets/images/productos/astronautaSaludo.mp4" type="video/mp4" />
                </video>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                
                {/* Botón para ver cursos - Responsive */}
                <button
                    onClick={toggleCursos}
                    className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00913f] to-[#14B8A6] hover:from-[#00a649] hover:to-[#16CCBB] text-white px-6 py-2.5 lg:px-8 lg:py-3 rounded-full text-xs lg:text-sm font-bold shadow-lg transition-all duration-300 flex items-center gap-2 hover:scale-105"
                >
                    <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span>{cursosOpen ? 'Ocultar' : 'Ver'} 32 Cursos</span>
                    <svg className={`w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 ${cursosOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            {/* Lista de Cursos - Responsive */}
            {cursosOpen && (
                <div className="mx-3 lg:mx-6 mb-4 lg:mb-6 bg-[#1A1A2E]/95 backdrop-blur-sm rounded-2xl p-3 lg:p-4 max-h-[250px] lg:max-h-[400px] overflow-y-auto custom-scrollbar">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-3">
                        {cursos.map((curso, idx) => (
                            <div 
                                key={idx} 
                                className="bg-gradient-to-br from-[#0A0A14] to-[#1A1A2E] rounded-lg lg:rounded-xl p-2.5 lg:p-3 border border-[#00913f]/20 hover:border-[#00913f]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#00913f]/10 group"
                            >
                                <div className="flex items-start justify-between gap-2 mb-1.5 lg:mb-2">
                                    <h4 className="text-white font-bold text-[10px] lg:text-sm leading-tight flex-1 group-hover:text-[#14B8A6] transition-colors">
                                        {curso.titulo}
                                    </h4>
                                    <span className={`text-[7px] lg:text-[9px] px-1.5 lg:px-2 py-0.5 lg:py-1 rounded-full font-semibold border whitespace-nowrap ${getNivelColor(curso.nivel)}`}>
                                        {curso.nivel}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 lg:gap-3">
                                    <div className="flex items-center gap-1">
                                        <svg className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#00913f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-[8px] lg:text-xs text-gray-400 font-medium">{curso.horas}</span>
                                    </div>
                                    <div className="h-3 w-px bg-gray-700"></div>
                                    <span className="text-[8px] lg:text-xs text-[#14B8A6] font-medium">{curso.categoria}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-1 lg:gap-2 px-3 lg:px-6 pb-3 lg:pb-6">
                <div className="text-center min-w-0">
                    <p className="text-[9px] lg:text-sm font-bold text-white mb-0.5 lg:mb-1 leading-tight">32 CURSOS</p>
                </div>
                <div className="text-center min-w-0">
                    <p className="text-[9px] lg:text-sm font-bold text-[#14B8A6] mb-0.5 lg:mb-1 leading-tight">100% ONLINE</p>
                </div>
                <div className="text-center min-w-0">
                    <p className="text-[9px] lg:text-sm font-bold text-[#00913f] mb-0.5 lg:mb-1 leading-tight">CERTIFICACIÓN</p>
                </div>
            </div>

            {/* Modal */}
            {showInfoModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4" onClick={closeModal}>
                    <div className="bg-[#1A1A2E] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-[#00913f]/30 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className="sticky top-0 bg-gradient-to-r from-[#00913f] to-[#14B8A6] p-6 flex items-center justify-between z-10">
                            <div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-white">Academia Mayia</h2>
                                <p className="text-sm text-white/90 mt-1">32 cursos de IA para empresas y equipos técnicos</p>
                            </div>
                            <button onClick={closeModal} className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors" aria-label="Cerrar">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        
                        <div className="p-6 space-y-6">
                            <div className="bg-gradient-to-br from-[#0A0A14] to-[#1A1A2E] rounded-xl p-6 border border-[#00913f]/20">
                                <h3 className="text-xl font-bold text-white mb-3">Capacitación Especializada</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Ofrecemos más de 32 cursos certificados en Inteligencia Artificial, desde fundamentos hasta implementaciones avanzadas. 
                                    Nuestros programas están diseñados para empresas y equipos técnicos que buscan dominar las últimas tecnologías en IA.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gradient-to-br from-[#0A0A14] to-[#1A1A2E] rounded-xl p-5 border border-[#00913f]/20">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 bg-[#00913f]/20 rounded-lg flex items-center justify-center">
                                            <svg className="w-6 h-6 text-[#00913f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-bold text-white">Certificación Oficial</h4>
                                    </div>
                                    <p className="text-sm text-gray-400">Obtén certificados reconocidos al completar cada curso</p>
                                </div>

                                <div className="bg-gradient-to-br from-[#0A0A14] to-[#1A1A2E] rounded-xl p-5 border border-[#14B8A6]/20">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 bg-[#14B8A6]/20 rounded-lg flex items-center justify-center">
                                            <svg className="w-6 h-6 text-[#14B8A6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-bold text-white">100% Online</h4>
                                    </div>
                                    <p className="text-sm text-gray-400">Aprende a tu ritmo desde cualquier lugar</p>
                                </div>
                            </div>

                            <button 
                                onClick={() => { closeModal(); handleAgendarCita(); }}
                                className="w-full bg-gradient-to-r from-[#00913f] to-[#14B8A6] text-white font-semibold py-4 rounded-xl hover:shadow-xl hover:shadow-[#00913f]/30 hover:scale-105 transition-all duration-300 will-change-transform text-lg"
                            >
                                Agendar Cotización
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-10px) scale(1.05); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(0, 145, 63, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: linear-gradient(180deg, #00913f, #14B8A6);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(180deg, #00a649, #16CCBB);
                }
            `}</style>
        </div>
    );
};

export default AcademiaModule;