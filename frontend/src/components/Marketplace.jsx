import { useState, useEffect, useRef } from 'react'
import '../styles/carousel.css'

import DRPModule from './modules/Marketplace/DRPModule.jsx';  
import AcademiaModule from './modules/Marketplace/AcademiaModule.jsx';
import PildorasModule from './modules/Marketplace/PildorasModule.jsx';
import LUMELModule from './modules/Marketplace/LUMELModule.jsx';
import GuardIAModule from './modules/Marketplace/GuardIAModule.jsx';
import SenderoSeguroModule from './modules/Marketplace/SenderoSeguroModule.jsx';
import ParqueSeguroModule from './modules/Marketplace/ParqueSeguroModule.jsx';
import ObrasPublicasModule from './modules/Marketplace/ObrasPublicasModule.jsx';
import HechoMexicoModule from './modules/Marketplace/HechoMexicoModule.jsx';
import RetailModule from './modules/Marketplace/RetailModule.jsx';



const Marketplace = () => {
    const [hoveredModule, setHoveredModule] = useState(null);
    const moduleRefs = useRef({});

    useEffect(() => {
        // Solo activar en dispositivos móviles (ancho < 1024px)
        const isMobile = window.innerWidth < 1024;
        
        if (!isMobile) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // La tarjeta debe estar 50% visible para activarse
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const moduleId = entry.target.dataset.moduleId;
                    setHoveredModule(moduleId);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observar cada tarjeta
        Object.values(moduleRefs.current).forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section id="marketplace" className="py-24 bg-[#0A0A14] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-[#4881EB] bg-opacity-10 rounded-full mb-4">
                        <span className="text-[#7FD1FF] font-mono text-sm">Marketplace</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Descubre nuestros Servicios<br/>
                        <span className="gradient-text">Personalizados para tus necesidades</span>
                    </h2>
                </div>

                <div className="lg:flex lg:flex-wrap lg:justify-center lg:gap-8 lg:max-w-6xl lg:mx-auto overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none flex gap-3 px-4 lg:px-0 scrollbar-hide pb-4">


                    {/* VER QUE GRID QUEDARIA MEJOR SI 2X2 O MODIFICARLO  */}


                    {/* MARKETPLACE */}

                       {/* DRP - Morado (Teal) */}
                    <div
                        ref={(el) => (moduleRefs.current['recuperacion'] = el)}
                        data-module-id="recuperacion"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[280px] w-[280px] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-center"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('recuperacion')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <div className="fixed inset-0 pointer-events-none -z-50">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-0 group-hover:opacity-70 transition-opacity duration-700 blur-[100px] bg-[#b059b1] rounded-full"></div>
                        </div>
                        <DRPModule hoveredModule={hoveredModule} moduleId="recuperacion" />
                    </div>

                    {/* Academia - verde (Teal) */}
                    <div
                        ref={(el) => (moduleRefs.current['academia'] = el)}
                        data-module-id="academia"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[280px] w-[280px] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-center"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('academia')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <div className="fixed inset-0 pointer-events-none -z-50">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-0 group-hover:opacity-70 transition-opacity duration-700 blur-[100px] bg-[#00913f] rounded-full"></div>
                        </div>
                        <AcademiaModule hoveredModule={hoveredModule} moduleId="academia" />
                    </div>

                    {/* Pildoras - verde (Teal) */}
                    <div
                        ref={(el) => (moduleRefs.current['pildoras'] = el)}
                        data-module-id="pildoras"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[280px] w-[280px] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-center"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('pildoras')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <div className="fixed inset-0 pointer-events-none -z-50">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-0 group-hover:opacity-70 transition-opacity duration-700 blur-[100px] bg-[#00913f] rounded-full"></div>
                        </div>
                        <PildorasModule hoveredModule={hoveredModule} moduleId="pildoras" />
                    </div>

                    {/* LUMEL - Morado */}
                    <div
                        ref={(el) => (moduleRefs.current['lumel'] = el)}
                        data-module-id="lumel"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[280px] w-[280px] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-center"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('lumel')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <div className="fixed inset-0 pointer-events-none -z-50">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-0 group-hover:opacity-70 transition-opacity duration-700 blur-[100px] bg-[#9C27B0] rounded-full"></div>
                        </div>
                        <LUMELModule hoveredModule={hoveredModule} moduleId="lumel" />
                    </div>


                    {/* GuardIA - Azul */}
                    <div
                        ref={(el) => (moduleRefs.current['GuardIA'] = el)}
                        data-module-id="GuardIA"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[280px] w-[280px] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-center"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('GuardIA')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <div className="fixed inset-0 pointer-events-none -z-50">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-0 group-hover:opacity-70 transition-opacity duration-700 blur-[100px] bg-[#4881EB] rounded-full"></div>
                        </div>
                        <GuardIAModule hoveredModule={hoveredModule} moduleId="GuardIA" />
                    </div>
                    
                      {/* Sendero Seguro - Morado (Teal) */}
                    <div
                        ref={(el) => (moduleRefs.current['senderoseguro'] = el)}
                        data-module-id="senderoseguro"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[280px] w-[280px] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-center"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('senderoseguro')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <div className="fixed inset-0 pointer-events-none -z-50">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-0 group-hover:opacity-70 transition-opacity duration-700 blur-[100px] bg-[#b059b1] rounded-full"></div>
                        </div>
                        <SenderoSeguroModule hoveredModule={hoveredModule} moduleId="senderoseguro" />
                    </div>


                    {/* Parque Seguro  - Verde-Azul (Teal) */}
                    <div
                        ref={(el) => (moduleRefs.current['parqueseguro'] = el)}
                        data-module-id="parqueseguro"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[280px] w-[280px] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-center"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('parqueseguro')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <div className="fixed inset-0 pointer-events-none -z-50">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-0 group-hover:opacity-70 transition-opacity duration-700 blur-[100px] bg-[#14B8A6] rounded-full"></div>
                        </div>
                        <ParqueSeguroModule hoveredModule={hoveredModule} moduleId="parqueseguro" />
                    </div>

                    {/* Obras Publicas - verde (Teal) */}
                    <div
                        ref={(el) => (moduleRefs.current['obraspublicas'] = el)}
                        data-module-id="obraspublicas"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[280px] w-[280px] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-center"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('obraspublicas')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <div className="fixed inset-0 pointer-events-none -z-50">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-0 group-hover:opacity-70 transition-opacity duration-700 blur-[100px] bg-[#00913f] rounded-full"></div>
                        </div>
                        <ObrasPublicasModule hoveredModule={hoveredModule} moduleId="obraspublicas" />
                    </div>


                      {/* Hecho Mexico - Rojo */}
                    <div
                        ref={(el) => (moduleRefs.current['hechoMexico'] = el)}
                        data-module-id="hechoMexico"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[280px] w-[280px] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-center"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('hechoMexico')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <div className="fixed inset-0 pointer-events-none -z-50">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-0 group-hover:opacity-70 transition-opacity duration-700 blur-[100px] bg-[#DC2626] rounded-full"></div>
                        </div>
                        <HechoMexicoModule hoveredModule={hoveredModule} moduleId="hechoMexico" />
                    </div>



                    {/* RetailModule - Azul */}
                    <div
                        ref={(el) => (moduleRefs.current['retail'] = el)}
                        data-module-id="retail"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[280px] w-[280px] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-center"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('retail')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <div className="fixed inset-0 pointer-events-none -z-50">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-0 group-hover:opacity-70 transition-opacity duration-700 blur-[100px] bg-[#E25905] rounded-full"></div>
                        </div>
                        <RetailModule hoveredModule={hoveredModule} moduleId="retail" />
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Marketplace;