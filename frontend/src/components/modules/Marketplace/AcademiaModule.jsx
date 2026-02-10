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
        { titulo: "Fundamentos del Prompting", nivel: "PRINCIPIANTE", horas: "4 HORAS", desc: "Aprende ingeniería de prompts efectivos y casos de uso técnico" },
        { titulo: "IA para Trabajo Inteligente", nivel: "INTERMEDIO", horas: "25 HORAS", desc: "Integra IA en procesos de trabajo, automatización y gestión" },
        { titulo: "Comunicación Efectiva en Equipo", nivel: "INTERMEDIO", horas: "10 HORAS", desc: "Fortalece comunicación en reuniones y transmisión de información" },
        { titulo: "Priorización y Delegación", nivel: "INTERMEDIO", horas: "10 HORAS", desc: "Estrategias para priorizar y delegar efectivamente" },
        { titulo: "IA para Gerentes", nivel: "AVANZADO", horas: "30 HORAS", desc: "Acelera adopción de IA: fundamentos, ROI y gobernanza" },
        { titulo: "Gestión del Cambio", nivel: "AVANZADO", horas: "15 HORAS", desc: "Reduce resistencia y fomenta innovación en procesos" },
        { titulo: "Toma de Decisiones Estratégicas", nivel: "AVANZADO", horas: "6 HORAS", desc: "Decisiones basadas en datos alineadas al negocio" },
        { titulo: "Optimización de Procesos", nivel: "AVANZADO", horas: "12 HORAS", desc: "Mejora desempeño y eficiencia de equipos" },
        { titulo: "Desarrollo de Talento Humano", nivel: "AVANZADO", horas: "15 HORAS", desc: "Gestión de talento, cultura y contratación" },
        { titulo: "Programación Asistida por IA", nivel: "INTERMEDIO", horas: "20 HORAS", desc: "Código, pruebas y optimización con agentes de IA" },
        { titulo: "Django REST Framework", nivel: "AVANZADO", horas: "40 HORAS", desc: "Diseña APIs robustas con autenticación" },
        { titulo: "Python Fundamentos", nivel: "PRINCIPIANTE", horas: "30 HORAS", desc: "Sintaxis, bucles, funciones y proyectos reales" },
        { titulo: "Django Web Development", nivel: "INTERMEDIO", horas: "20 HORAS", desc: "Aplicaciones dinámicas y lógica de negocios" },
        { titulo: "Docker para Python", nivel: "INTERMEDIO", horas: "10 HORAS", desc: "Contenerización y orquestación con Docker" },
        { titulo: "Fundamentos de LLMs", nivel: "AVANZADO", horas: "30 HORAS", desc: "Prompting, RAG y LLMs de código abierto" },
        { titulo: "Flask Web Apps", nivel: "INTERMEDIO", horas: "16 HORAS", desc: "Framework Flask y construcción de API REST" },
        { titulo: "SQL Básico", nivel: "PRINCIPIANTE", horas: "30 HORAS", desc: "Gestión de bases de datos y consultas" },
        { titulo: "SQL Avanzado", nivel: "AVANZADO", horas: "30 HORAS", desc: "Análisis complejo y métricas de negocio" },
        { titulo: "Machine Learning Fundamentos", nivel: "INTERMEDIO", horas: "40 HORAS", desc: "Modelos predictivos con Scikit-learn" },
        { titulo: "Computer Vision", nivel: "AVANZADO", horas: "40 HORAS", desc: "Clasificación de imágenes con redes neuronales" },
        { titulo: "Tableau Visualización", nivel: "INTERMEDIO", horas: "25 HORAS", desc: "Dashboards e informes interactivos" },
        { titulo: "Data Wrangling", nivel: "INTERMEDIO", horas: "25 HORAS", desc: "Limpieza y transformación de datos" },
        { titulo: "Álgebra Lineal", nivel: "AVANZADO", horas: "40 HORAS", desc: "Fundamentos para ciencia de datos" },
        { titulo: "ML para Textos", nivel: "AVANZADO", horas: "40 HORAS", desc: "Análisis de sentimientos y BERT" },
        { titulo: "ML para Negocios", nivel: "AVANZADO", horas: "40 HORAS", desc: "Aplicación de ML a problemas empresariales" },
        { titulo: "Métodos Numéricos en ML", nivel: "AVANZADO", horas: "30 HORAS", desc: "Descenso por gradiente y boosting" },
        { titulo: "Habilidades Blandas", nivel: "PRINCIPIANTE", horas: "2.5 HORAS", desc: "Pensamiento crítico y comunicación" },
        { titulo: "Análisis Estadístico", nivel: "INTERMEDIO", horas: "40 HORAS", desc: "Métodos estadísticos y prueba de hipótesis" },
        { titulo: "Aprendizaje Supervisado", nivel: "AVANZADO", horas: "40 HORAS", desc: "Optimización de hiperparámetros y métricas" },
        { titulo: "Python para Análisis", nivel: "PRINCIPIANTE", horas: "32 HORAS", desc: "Variables, bucles, Pandas y preprocesamiento" },
        { titulo: "Series Temporales", nivel: "AVANZADO", horas: "30 HORAS", desc: "Tendencias, estacionalidad y pronósticos" },
        { titulo: "Aprendizaje No Supervisado", nivel: "AVANZADO", horas: "30 HORAS", desc: "K-means y detección de anomalías" }
    ];
    
    return (
        <div 
            className="relative w-full h-full bg-[#0A0A14] rounded-3xl border-2 transition-[border-color,box-shadow] duration-300"
            style={containerStyle}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-4">
                <div className="flex items-center gap-3">
                    <div className="relative w-16 h-16">
                        <div className="absolute -top-2 -left-2 w-20 h-20 animate-float">
                            <img 
                                src="public/assets/images/astronauta.png" 
                                alt="Academia Astronauta" 
                                className="w-full h-full object-contain drop-shadow-2xl"
                                style={{
                                    filter: 'drop-shadow(0 10px 30px rgba(0, 145, 63, 0.6)) drop-shadow(0 0 20px rgba(20, 184, 166, 0.4))'
                                }}
                                loading="lazy"
                            />
                        </div>
                        
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-[#00913f]/40 to-[#0891B2]/40 rounded-full blur-xl"></div>
                    </div>
                    
                    <div className="ml-6">
                        <h3 className="text-xl font-bold text-white">Academia</h3>
                        <p className="text-sm text-gray-400">Acelera Adopción de IA</p>
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

            {/* Video y Contenido */}
            <div className="relative mx-6 mb-6 rounded-2xl overflow-visible" style={{ height: '350px' }}>
                <video 
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover rounded-2xl"
                >
                    <source src="public/assets/images/productos/astronautaSaludo.mp4" type="video/mp4" />
                </video>
                
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/60 rounded-2xl"></div>
                
                {/* Contenido en la derecha */}
                <div className="absolute top-0 right-0 h-full w-full md:w-7/12 lg:w-1/2 p-3 sm:p-4 flex flex-col justify-center space-y-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    <p className="text-[#7FFF00] font-bold text-sm sm:text-base md:text-lg text-right leading-tight drop-shadow-[0_2px_10px_rgba(127,255,0,0.8)] pr-2">
                        Lideramos en conocimiento<br/>para formación en IA
                    </p>
                    
                    <div className="space-y-1">
                        {['FORMACIÓN EN IA PARA\nEMPRESAS', 'FORMACIÓN EN IA PARA\nINDIVIDUOS', 'ALIANZAS CON ACADEMIA\nY GOBIERNOS'].map((text, idx) => (
                            <div key={idx} className="bg-gradient-to-r from-[#ADFF2F] to-[#7FFF00] py-1 px-2 rounded-md shadow-lg flex items-center justify-between">
                                <p className="text-black font-bold text-[9px] sm:text-[10px] leading-tight whitespace-pre-line">{text}</p>
                                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full flex-shrink-0"></div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Botón de cursos */}
                    <div className="relative">
                        <button 
                            onClick={toggleCursos}
                            className="w-full bg-gradient-to-r from-[#00913f] to-[#0891B2] text-white py-1 px-2 rounded-md shadow-xl text-[10px] sm:text-xs font-bold hover:scale-105 transition-transform will-change-transform"
                        >
                            VER 32 CURSOS IA
                        </button>
                        
                        {cursosOpen && (
                            <div className="absolute right-0 top-full mt-2 w-full sm:w-80 max-h-72 sm:max-h-96 overflow-y-auto bg-[#1A1A2E] rounded-lg shadow-2xl border border-[#00913f]/30 z-50"
                                style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                <div className="p-3 sm:p-4 border-b border-[#00913f]/20 sticky top-0 bg-[#1A1A2E]">
                                    <h4 className="text-white font-bold text-xs sm:text-sm mb-1">Academia Mayia</h4>
                                    <p className="text-gray-400 text-[10px] sm:text-xs">32 cursos de IA para empresas y equipos técnicos</p>
                                </div>
                                
                                <div className="p-2 space-y-2">
                                    {cursos.map((curso, index) => (
                                        <div key={index} className="bg-[#0A0A14] p-2 sm:p-3 rounded-lg border border-[#00913f]/20 hover:border-[#00913f]/50 transition-colors cursor-pointer">
                                            <div className="flex items-start justify-between mb-1">
                                                <h5 className="text-white font-semibold text-[10px] sm:text-xs">{curso.titulo}</h5>
                                                <span className={`text-[8px] px-1.5 py-0.5 rounded flex-shrink-0 ml-1 ${
                                                    curso.nivel === 'PRINCIPIANTE' ? 'bg-green-500/20 text-green-400' :
                                                    curso.nivel === 'INTERMEDIO' ? 'bg-yellow-500/20 text-yellow-400' :
                                                    'bg-red-500/20 text-red-400'
                                                }`}>{curso.nivel}</span>
                                            </div>
                                            <p className="text-[9px] sm:text-[10px] text-gray-400 mb-1 leading-tight">{curso.desc}</p>
                                            <p className="text-[9px] sm:text-[10px] text-[#00913f] font-semibold">{curso.horas}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 px-4 sm:px-6 pb-6 items-center">
                <div className="text-center min-w-0">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white mb-0.5 leading-tight">IA PARA</p>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white leading-tight">NEGOCIOS</p>
                </div>
                <div className="text-center min-w-0">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#14B8A6] mb-1">32</p>
                    <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wide">Cursos</p>
                </div>
                <div className="text-center min-w-0">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white mb-0.5 leading-tight">IA PARA</p>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white leading-tight">EQUIPOS TECH</p>
                </div>
            </div>

            {/* Modal */}
            {showInfoModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4" onClick={closeModal}>
                    <div className="bg-[#1A1A2E] rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border-2 border-[#00913f]/30 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className="sticky top-0 bg-gradient-to-r from-[#00913f] to-[#0891B2] p-6 flex items-center justify-between z-10">
                            <h2 className="text-2xl font-bold text-white">Academia Mayia</h2>
                            <button onClick={closeModal} className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors" aria-label="Cerrar">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <p className="text-gray-300">32 cursos especializados en Inteligencia Artificial para empresas y equipos técnicos.</p>
                            <button 
                                onClick={() => { closeModal(); handleAgendarCita(); }}
                                className="w-full bg-gradient-to-r from-[#00913f] to-[#0891B2] text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 will-change-transform"
                            >
                                Agendar Cotización
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) scale(1) rotate(0deg); }
                    50% { transform: translateY(-10px) scale(1.05) rotate(2deg); }
                }

                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default AcademiaModule;