import CONFIG from '../config/constants.js';
import { useEffect } from 'react'

const Hero = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-24 hero-image">
            <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#1230C4] to-[#000000]"></div>
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-20 w-64 h-64 bg-[#4881EB] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#7FD1FF] rounded-full blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-6 py-32 hero-content">
                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
                    
                    {/* Contenido izquierdo */}
                    <div className="max-w-4xl animate-fadeInUp">
                        {/* Badge con logos en mobile */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="inline-block px-4 py-2 bg-[#4881EB] bg-opacity-20 rounded-full border border-[#4881EB] border-opacity-30">
                                <span className="text-[#7FD1FF] font-mono text-sm">Yucatán • Transformación Digital</span>
                            </div>
                            {/* Logos móvil - CONTAINERS PARA MANTENER PROPORCIÓN */}
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
                            El Hub de <br/><span className="gradient-text">Digitalización Acelerada</span><br/>de Yucatán
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-[#B8C5D3] mb-8 max-w-2xl leading-relaxed animate-fadeInUp animation-delay-400">
                            Un ecosistema digital para operar los datos críticos del estado en un <span className="text-white font-semibold">Centro de Datos</span>, con <span className="text-[#7FD1FF] font-semibold">Ciberseguridad (SOC 360)</span>, <span className="text-white font-semibold">Nube Soberana</span> e <span className="text-white font-semibold">Inteligencia Artificial</span>.
                        </p>
                        
                        {/* Botones */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-6 animate-fadeInUp animation-delay-600">
                            <button 
                                onClick={() => scrollToSection('spaces')} 
                                className="bg-[#4881EB] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#7FD1FF] transition-all transform hover:scale-105 shadow-lg shadow-[#4881EB]/50"
                            >
                                Descubre Nuestros Servicios
                            </button>
                            <button 
                                onClick={() => scrollToSection('about')} 
                                className="glass-effect text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-[#4881EB] transition-all"
                            >
                                Digitaliza, Protege y Escala
                            </button>
                        </div>
                    </div>

                    {/* Logos Hecho en México y Monarch - desktop con animación float */}
                    <div className="lg:flex flex-col justify-center items-center gap-6 hidden pt-8 animate-fadeInUp animation-delay-800">
                        {/* Contenedor para "Hecho en México" con proporción fija */}
                        <div className="w-56 h-28 flex items-center justify-center">
                            <img 
                                src="/assets/images/hechoMexicoRojo.PNG" 
                                alt="Hecho en México" 
                                className="max-w-full max-h-full w-auto h-auto object-contain drop-shadow-2xl animate-float"
                                loading="eager"
                            />
                        </div>
                        {/* Contenedor para "Monarch" con proporción fija */}
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
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-15px);
                    }
                }

                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out forwards;
                    opacity: 0;
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }

                .animation-delay-200 {
                    animation-delay: 0.2s;
                }

                .animation-delay-400 {
                    animation-delay: 0.4s;
                }

                .animation-delay-600 {
                    animation-delay: 0.6s;
                }

                .animation-delay-800 {
                    animation-delay: 0.8s;
                }

                .animation-delay-1000 {
                    animation-delay: 1s;
                }
            `}</style>
        </section>
    );
};

export default Hero;