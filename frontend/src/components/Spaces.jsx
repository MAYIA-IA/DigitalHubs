import { useState, useEffect, useRef, lazy, Suspense } from 'react'
import '../styles/carousel.css'

// 🔧 OPT: lazy() igual que en Marketplace — los 4 módulos se descargan solo cuando son necesarios
const EdgenetModule = lazy(() => import('./modules/OurEnterpriseModules/EdgenetModule.jsx'));
const FlaiModule    = lazy(() => import('./modules/OurEnterpriseModules/FlaiModule.jsx'));
const SocModule     = lazy(() => import('./modules/OurEnterpriseModules/SocModule.jsx'));
const MayiaModule   = lazy(() => import('./modules/OurEnterpriseModules/MayiaModule.jsx'));

const MODULE_COLORS = {
    edgenet: 'var(--secundario)',
    Flai:    null,
    mayia:   '#A4D955',
    soc:     'var(--secundario)',
};

// 🔧 OPT: skeleton mientras cargan los módulos
const CardSkeleton = () => (
    <div className="w-full h-72 rounded-2xl bg-white/5 animate-pulse" aria-hidden="true" />
);

const Spaces = () => {
    const [hoveredModule, setHoveredModule] = useState(null);
    const [activeModule, setActiveModule] = useState(null);
    // 🔧 OPT: igual que Marketplace, montar solo cuando es visible
    const [isVisible, setIsVisible] = useState(false);
    const moduleRefs = useRef({});
    const sectionRef = useRef(null);
    const hoverTimeoutRef = useRef(null);

    const handleMouseEnter = (id) => {
        if (window.innerWidth < 1024) return;
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        setHoveredModule(id);
    };

    const handleMouseLeave = () => {
        if (window.innerWidth < 1024) return;
        hoverTimeoutRef.current = setTimeout(() => setHoveredModule(null), 150);
    };

    useEffect(() => {
        // 🔧 OPT: montar módulos solo cuando la sección entra al viewport
        const sectionEl = sectionRef.current;
        const visibilityObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    visibilityObserver.disconnect();
                }
            },
            { rootMargin: '300px' }
        );
        if (sectionEl) visibilityObserver.observe(sectionEl);

        const isMobile = window.innerWidth < 1024;
        if (!isMobile) return () => visibilityObserver.disconnect();

        const observerOptions = { root: null, rootMargin: '-25% 0px -25% 0px', threshold: 0.1 };
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

        const mobileObserver = new IntersectionObserver(observerCallback, observerOptions);
        const timeout = setTimeout(() => {
            Object.values(moduleRefs.current).forEach((ref) => { if (ref) mobileObserver.observe(ref); });
        }, 500);

        return () => {
            visibilityObserver.disconnect();
            mobileObserver.disconnect();
            clearTimeout(timeout);
        };
    }, []);

    const currentModule = hoveredModule ?? activeModule;
    const isFlai = currentModule === 'Flai';
    const blobColor = (!isFlai && currentModule) ? (MODULE_COLORS[currentModule] ?? null) : null;

    const cardClass = "module-card relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[75vw] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[400px] snap-center";

    const modules = [
        { id: 'edgenet', Component: EdgenetModule },
        { id: 'Flai',    Component: FlaiModule },
        { id: 'mayia',   Component: MayiaModule },
        { id: 'soc',     Component: SocModule },
    ];

    return (
        <section id="spaces" ref={sectionRef} className="py-24 bg-[var(--fondo-secundario)] relative lg:overflow-hidden">

            {/* 🔧 OPT: blob con will-change:opacity — mínimo impacto en GPU */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }} aria-hidden="true">
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
                {/* Blobs tricolor FLAI */}
                <div className="absolute left-[30%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[700px] rounded-full"
                    style={{ background: '#006847', opacity: isFlai ? 0.6 : 0, filter: 'blur(120px)', transition: 'opacity 700ms ease', willChange: 'opacity' }} />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[700px] rounded-full"
                    style={{ background: 'white', opacity: isFlai ? 0.5 : 0, filter: 'blur(120px)', transition: 'opacity 700ms ease', willChange: 'opacity' }} />
                <div className="absolute left-[70%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[700px] rounded-full"
                    style={{ background: '#CE1126', opacity: isFlai ? 0.6 : 0, filter: 'blur(120px)', transition: 'opacity 700ms ease', willChange: 'opacity' }} />
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
                    <Suspense fallback={
                        <>
                            {modules.map(({ id }) => (
                                <div key={id} className={cardClass}>
                                    <CardSkeleton />
                                </div>
                            ))}
                        </>
                    }>
                        {isVisible && modules.map(({ id, Component }) => (
                            <div
                                key={id}
                                ref={(el) => (moduleRefs.current[id] = el)}
                                data-module-id={id}
                                className={cardClass}
                                onMouseEnter={() => handleMouseEnter(id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Component hoveredModule={hoveredModule} moduleId={id} />
                            </div>
                        ))}
                    </Suspense>
                </div>
            </div>
        </section>
    );
};

export default Spaces;