import { useState, useEffect, useRef } from 'react'
import '../styles/carousel.css'

import EdgenetModule from './modules/OurEnterpriseModules/EdgenetModule.jsx';
import FlaiModule from './modules/OurEnterpriseModules/FlaiModule.jsx';
import SocModule from './modules/OurEnterpriseModules/SocModule.jsx';
import MayiaModule from './modules/OurEnterpriseModules/MayiaModule.jsx';

const Spaces = () => {
    const [hoveredModule, setHoveredModule] = useState(null);
    const [activeModule, setActiveModule] = useState(null); // Para mobile
    const moduleRefs = useRef({});

    useEffect(() => {
        // Solo activar en dispositivos móviles (ancho < 1024px)
        const isMobile = window.innerWidth < 1024;
        
        if (!isMobile) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const moduleId = entry.target.dataset.moduleId;
                    setHoveredModule(moduleId); // Activar efecto de color automáticamente
                    setActiveModule(moduleId);
                } else {
                    const moduleId = entry.target.dataset.moduleId;
                    // Desactivar cuando sale de la vista
                    if (activeModule === moduleId) {
                        setActiveModule(null);
                        setHoveredModule(null); // Desactivar efecto de color también
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        Object.values(moduleRefs.current).forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            observer.disconnect();
        };
    }, [activeModule]);

    return (
        <section id="spaces" className="py-24 bg-[#0A0A14] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-[#4881EB] bg-opacity-10 rounded-full mb-4">
                        <span className="text-[#7FD1FF] font-mono text-sm">Servicios Digitales</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Descubre el Servicio<br/>
                        <span className="gradient-text">Perfecto para Digitalizar Tu Empresa</span>
                    </h2>
                </div>

                <div className="lg:flex lg:flex-wrap lg:justify-center lg:gap-8 lg:max-w-6xl lg:mx-auto overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none flex gap-4 px-6 lg:px-0 scrollbar-hide pb-4">

                    {/* EdgeNet - Verde */}
                    <div
                        ref={(el) => (moduleRefs.current['edgenet'] = el)}
                        data-module-id="edgenet"
                        className="module-card relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[75vw] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[400px] snap-center"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('edgenet')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <div className="fixed inset-0 pointer-events-none -z-50">
                            <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] transition-opacity duration-700 blur-[100px] bg-[#4881EB] rounded-full ${activeModule === 'edgenet' || hoveredModule === 'edgenet' ? 'opacity-70' : 'opacity-0'}`}></div>
                        </div>
                        <EdgenetModule hoveredModule={hoveredModule} moduleId="edgenet" />
                    </div>

                    {/* FLAI - Bandera México (Verde, Blanco, Rojo) */}
                    <div
                        ref={(el) => (moduleRefs.current['Flai'] = el)}
                        data-module-id="Flai"
                        className="module-card relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[75vw] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[400px] snap-center"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('Flai')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <div className="fixed inset-0 pointer-events-none -z-50">
                            <div className={`absolute left-[30%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[700px] transition-opacity duration-700 blur-[120px] bg-[#006847] rounded-full ${activeModule === 'Flai' || hoveredModule === 'Flai' ? 'opacity-60' : 'opacity-0'}`}></div>
                            <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[700px] transition-opacity duration-700 blur-[120px] bg-white rounded-full ${activeModule === 'Flai' || hoveredModule === 'Flai' ? 'opacity-50' : 'opacity-0'}`}></div>
                            <div className={`absolute left-[70%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[700px] transition-opacity duration-700 blur-[120px] bg-[#CE1126] rounded-full ${activeModule === 'Flai' || hoveredModule === 'Flai' ? 'opacity-60' : 'opacity-0'}`}></div>
                        </div>
                        <FlaiModule hoveredModule={hoveredModule} moduleId="Flai" />
                    </div>

                    {/* MAYIA - Verde */}
                    <div
                        ref={(el) => (moduleRefs.current['mayia'] = el)}
                        data-module-id="mayia"
                        className="module-card relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[75vw] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[400px] snap-center"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('mayia')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <div className="fixed inset-0 pointer-events-none -z-50">
                            <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] transition-opacity duration-700 blur-[100px] bg-[#A4D955] rounded-full ${activeModule === 'mayia' || hoveredModule === 'mayia' ? 'opacity-70' : 'opacity-0'}`}></div>
                        </div>
                        <MayiaModule hoveredModule={hoveredModule} moduleId="mayia" />
                    </div>

                    {/* SOC - Azul */}
                    <div
                        ref={(el) => (moduleRefs.current['soc'] = el)}
                        data-module-id="soc"
                        className="module-card relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[75vw] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[400px] snap-center"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('soc')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <div className="fixed inset-0 pointer-events-none -z-50">
                            <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] transition-opacity duration-700 blur-[100px] bg-[#4881EB] rounded-full ${activeModule === 'soc' || hoveredModule === 'soc' ? 'opacity-70' : 'opacity-0'}`}></div>
                        </div>
                        <SocModule hoveredModule={hoveredModule} moduleId="soc" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Spaces;