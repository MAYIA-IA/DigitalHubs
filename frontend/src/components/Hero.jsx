import CONFIG from '../config/constants.js';
import { useEffect } from 'react'

const Hero = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-24 hero-image">
            {/* Fondo con gradiente usando variables */}
            <div className="absolute inset-0" style={{ background: 'var(--gradiente-primario)' }}></div>
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-20 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: 'var(--secundario)' }}></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'var(--acento)' }}></div>
            </div>
            
            <div className="container mx-auto px-6 py-32 hero-content">
                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
                    
                    {/* Contenido izquierdo */}
                    <div className="max-w-4xl animate-fadeInUp">
                        {/* Badge con logos en mobile */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="inline-block px-4 py-2 rounded-full" style={{ 
                                backgroundColor: 'var(--fondo-glass)', 
                                border: '1px solid var(--borde-hover)' 
                            }}>
                                <span className="font-mono text-sm" style={{ color: 'var(--acento)' }}>León • Transformación Digital</span>
                            </div>
                            {/* Logos móvil */}
                            <div className="flex items-center gap-4 lg:hidden">
                                <div className="w-16 h-16 flex items-center justify-center">
                                    <img 
                                        src="/assets/images/hechoMexicoRojo.PNG" 
                                        alt="Hecho en México" 
                                        className="max-w-full max-h-full w-auto h-auto object-contain"
                                        loading="eager"
                                    />
                                </div>
                                <div className="w-16 h-16 flex items-center justify-center">
                                    <img 
                                        src="/assets/images/LogoMonarchBlanco.png" 
                                        alt="Monarch" 
                                        className="max-w-full max-h-full w-auto h-auto object-contain"
                                        loading="eager"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fadeInUp animation-delay-200">
                            El Hub de <br/><span className="gradient-text">Digitalización Acelerada</span><br/>de León
                        </h1>
                        
                        <p className="text-xl md:text-2xl mb-8 max-w-2xl leading-relaxed animate-fadeInUp animation-delay-400" style={{ color: 'var(--texto-medio)' }}>
                            Un ecosistema digital para operar los datos críticos del estado en un <span className="text-white font-semibold">Centro de Datos</span>, con <span className="font-semibold" style={{ color: 'var(--acento)' }}>Ciberseguridad (SOC 360)</span>, <span className="text-white font-semibold">Nube Soberana</span> e <span className="text-white font-semibold">Inteligencia Artificial</span>.
                        </p>
                        
                        {/* Botones */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-6 animate-fadeInUp animation-delay-600">
                            <button 
                                onClick={() => scrollToSection('spaces')} 
                                className="text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
                                style={{ 
                                    backgroundColor: 'var(--secundario)',
                                    boxShadow: '0 10px 30px color-mix(in srgb, var(--secundario) 40%, transparent)'
                                }}
                                onMouseEnter={e => e.target.style.backgroundColor = 'var(--acento)'}
                                onMouseLeave={e => e.target.style.backgroundColor = 'var(--secundario)'}
                            >
                                Descubre Nuestros Servicios
                            </button>
                            <button 
                                onClick={() => scrollToSection('about')} 
                                className="glass-effect text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
                                style={{ border: '1px solid var(--borde)' }}
                                onMouseEnter={e => e.target.style.borderColor = 'var(--secundario)'}
                                onMouseLeave={e => e.target.style.borderColor = 'var(--borde)'}
                            >
                                Digitaliza, Protege y Escala
                            </button>
                        </div>
                    </div>

                    {/* Logos desktop */}
                    <div className="lg:flex flex-col justify-center items-center gap-6 hidden pt-8 animate-fadeInUp animation-delay-800">
                        <div className="w-56 h-28 flex items-center justify-center">
                            <img 
                                src="/assets/images/hechoMexicoRojo.PNG" 
                                alt="Hecho en México" 
                                className="max-w-full max-h-full w-auto h-auto object-contain drop-shadow-2xl animate-float"
                                loading="eager"
                            />
                        </div>
                        <div className="w-56 h-28 flex items-center justify-center">
                            <img 
                                src="/assets/images/LogoMonarchBlanco.png" 
                                alt="Monarch" 
                                className="max-w-full max-h-full w-auto h-auto object-contain drop-shadow-2xl animate-float animation-delay-1000"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50%      { transform: translateY(-15px); }
                }

                .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
                .animate-float    { animation: float 3s ease-in-out infinite; }

                .animation-delay-200  { animation-delay: 0.2s; }
                .animation-delay-400  { animation-delay: 0.4s; }
                .animation-delay-600  { animation-delay: 0.6s; }
                .animation-delay-800  { animation-delay: 0.8s; }
                .animation-delay-1000 { animation-delay: 1s; }
            `}</style>
        </section>
    );
};

export default Hero;