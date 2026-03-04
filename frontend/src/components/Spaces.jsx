import { useState, useEffect, useRef } from 'react'
import '../styles/carousel.css'

import EdgenetModule from './modules/OurEnterpriseModules/EdgenetModule.jsx';
import FlaiModule from './modules/OurEnterpriseModules/FlaiModule.jsx';
import SocModule from './modules/OurEnterpriseModules/SocModule.jsx';
import MayiaModule from './modules/OurEnterpriseModules/MayiaModule.jsx';

// Colores del blob por módulo (mismo patrón que Marketplace)
const MODULE_COLORS = {
    edgenet: 'var(--secundario)',
    Flai:    null, // FLAI tiene 3 blobs especiales, se maneja aparte
    mayia:   '#A4D955',
    soc:     'var(--secundario)',
};

const Spaces = () => {
    const [hoveredModule, setHoveredModule] = useState(null);
    const [activeModule, setActiveModule] = useState(null);
    const moduleRefs = useRef({});

    // ── IntersectionObserver para mobile (mismo patrón que Marketplace) ──
    useEffect(() => {
        const isMobile = window.innerWidth < 1024;
        if (!isMobile) return;

        const observerOptions = {
            root: null,
            rootMargin: '-25% 0px -25% 0px',
            threshold: 0.1,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                const moduleId = entry.target.dataset.moduleId;
                if (entry.isIntersecting) {
                    setHoveredModule(moduleId);
                    setActiveModule(moduleId);
                } else {
                    setActiveModule((prev) => prev === moduleId ? null : prev);
                    setHoveredModule((prev) => prev === moduleId ? null : prev);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        Object.values(moduleRefs.current).forEach((ref) => { if (ref) observer.observe(ref); });
        return () => observer.disconnect();
    }, []);

    const currentModule = hoveredModule ?? activeModule;
    const isFlai = currentModule === 'Flai';
    const blobColor = (!isFlai && currentModule) ? (MODULE_COLORS[currentModule] ?? null) : null;

    const cardClass = "module-card relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[75vw] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[400px] snap-center";

    return (
        <section id="spaces" className="py-24 bg-[var(--fondo-secundario)] relative lg:overflow-hidden">

            {/* ── BLOB GLOW (patrón Marketplace: absolute, no fixed) ── */}
            <div
                className="absolute inset-0 pointer-events-none overflow-hidden"
                style={{ zIndex: 0 }}
                aria-hidden="true"
            >
                {/* Blob normal para edgenet / mayia / soc */}
                <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
                    style={{
                        background: blobColor || 'transparent',
                        opacity: blobColor ? 0.55 : 0,
                        filter: 'blur(100px)',
                        transition: 'opacity 700ms ease, background 500ms ease',
                        willChange: 'opacity',
                    }}
                />

                {/* Blobs tricolor para FLAI (bandera México) */}
                <div
                    className="absolute left-[30%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[700px] rounded-full"
                    style={{
                        background: '#006847',
                        opacity: isFlai ? 0.6 : 0,
                        filter: 'blur(120px)',
                        transition: 'opacity 700ms ease',
                        willChange: 'opacity',
                    }}
                />
                <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[700px] rounded-full"
                    style={{
                        background: 'white',
                        opacity: isFlai ? 0.5 : 0,
                        filter: 'blur(120px)',
                        transition: 'opacity 700ms ease',
                        willChange: 'opacity',
                    }}
                />
                <div
                    className="absolute left-[70%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[700px] rounded-full"
                    style={{
                        background: '#CE1126',
                        opacity: isFlai ? 0.6 : 0,
                        filter: 'blur(120px)',
                        transition: 'opacity 700ms ease',
                        willChange: 'opacity',
                    }}
                />
            </div>

            <div className="container mx-auto lg:px-6" style={{ position: 'relative', zIndex: 1 }}>
                <div className="text-center mb-16 px-6">
                    <div className="inline-block px-4 py-2 bg-[var(--secundario)] bg-opacity-10 rounded-full mb-4">
                        <span className="text-[var(--acento)] font-mono text-sm">Servicios Digitales</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-white">
                        Descubre el Servicio<br/>
                        <span className="gradient-text">Perfecto para Digitalizar Tu Empresa</span>
                    </h2>
                </div>

                <div
                    className="lg:flex lg:flex-wrap lg:justify-center lg:gap-8 lg:max-w-6xl lg:mx-auto overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none flex gap-4 lg:px-0 scrollbar-hide pb-4"
                    style={{ paddingLeft: '5vw', paddingRight: '5vw', WebkitOverflowScrolling: 'touch' }}
                >

                    {/* EdgeNet */}
                    <div
                        ref={(el) => (moduleRefs.current['edgenet'] = el)}
                        data-module-id="edgenet"
                        className={cardClass}
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('edgenet')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setTimeout(() => setHoveredModule(null), 100)}
                    >
                        <EdgenetModule hoveredModule={hoveredModule} moduleId="edgenet" />
                    </div>

                    {/* FLAI */}
                    <div
                        ref={(el) => (moduleRefs.current['Flai'] = el)}
                        data-module-id="Flai"
                        className={cardClass}
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('Flai')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setTimeout(() => setHoveredModule(null), 100)}
                    >
                        <FlaiModule hoveredModule={hoveredModule} moduleId="Flai" />
                    </div>

                    {/* MAYIA */}
                    <div
                        ref={(el) => (moduleRefs.current['mayia'] = el)}
                        data-module-id="mayia"
                        className={cardClass}
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('mayia')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setTimeout(() => setHoveredModule(null), 100)}
                    >
                        <MayiaModule hoveredModule={hoveredModule} moduleId="mayia" />
                    </div>

                    {/* SOC */}
                    <div
                        ref={(el) => (moduleRefs.current['soc'] = el)}
                        data-module-id="soc"
                        className={cardClass}
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('soc')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setTimeout(() => setHoveredModule(null), 100)}
                    >
                        <SocModule hoveredModule={hoveredModule} moduleId="soc" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Spaces;