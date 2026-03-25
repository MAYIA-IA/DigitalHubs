import { useState, useEffect, useRef, lazy, Suspense } from 'react'
import '../styles/carousel.css'

// 🔧 OPT: lazy() → cada módulo se descarga solo cuando el usuario llega al carrusel
// Antes: los 18 módulos se descargaban al cargar la página (bundle enorme)
// Ahora: se descargan en paralelo cuando el componente Marketplace es visible
const DRPModule              = lazy(() => import('./modules/Marketplace/DRPModule.jsx'));
const AcademiaModule         = lazy(() => import('./modules/Marketplace/AcademiaModule.jsx'));
const PildorasModule         = lazy(() => import('./modules/Marketplace/PildorasModule.jsx'));
const LUMELModule            = lazy(() => import('./modules/Marketplace/LUMELModule.jsx'));
const ObrasPublicasModule    = lazy(() => import('./modules/Marketplace/ObrasPublicasModule.jsx'));
const HechoMexicoModule      = lazy(() => import('./modules/Marketplace/HechoMexicoModule.jsx'));
const FAQsWhatsAppModule     = lazy(() => import('./modules/Marketplace/FAQsWhatsappModule.jsx'));
const BIExpressModule        = lazy(() => import('./modules/Marketplace/BIExpressModule.jsx'));
const ETLDataLakeModule      = lazy(() => import('./modules/Marketplace/ETLDataLakeModule.jsx'));
const ConciliacionModule     = lazy(() => import('./modules/Marketplace/ConciliacionModule.jsx'));
const PrediccionVentasModule = lazy(() => import('./modules/Marketplace/PrediccionVentasModule.jsx'));
const InventarioInteligentModule = lazy(() => import('./modules/Marketplace/InventarioInteligentModule.jsx'));
const DeteccionAnomalíasModule   = lazy(() => import('./modules/Marketplace/DeteccionAnomalíasModule.jsx'));
const PortalDocumentosModule     = lazy(() => import('./modules/Marketplace/PortalDocumentosModule.jsx'));
const CerebroCorporativoModule = lazy(() => import('./modules/Marketplace/CerebroCorporativoModule.jsx'));
const ControllistaModule       = lazy(() => import('./modules/Marketplace/ControlListaModule.jsx'));
const IntelligenceHubModule    = lazy(() => import('./modules/Marketplace/IntelligenceHubModule.jsx'));
 

const MODULE_COLORS = {
    recuperacion:          '#b059b1',
    academia:              '#00913f',
    pildoras:              '#00913f',
    lumel:                 '#9C27B0',
    obraspublicas:         '#00913f',
    hechoMexico:           '#DC2626',
    faqswhatsapp:          '#25D366',
    biexpress:             '#F59E0B',
    etldatalake:           '#06B6D4',
    conciliacion:          '#8B5CF6',
    prediccionventas:      '#10B981',
    inventariointeligente: '#F97316',
    deteccionanomalias:    '#EF4444',
    portaldocumentos:      '#6366F1',
    cerebroCorporativo: '#0EA5E9',
    controllista:       '#F43F5E',
    intelligenceHub:    '#14B8A6',
};

// 🔧 OPT: Skeleton placeholder mientras carga cada tarjeta
const CardSkeleton = () => (
    <div className="w-full h-64 rounded-2xl bg-white/5 animate-pulse" aria-hidden="true" />
);

const Marketplace = () => {
    const [hoveredModule, setHoveredModule] = useState(null);
    const [activeModule, setActiveModule] = useState(null);
    // 🔧 OPT: los módulos solo se montan cuando la sección es visible
    const [isVisible, setIsVisible] = useState(false);
    const [blobPos, setBlobPos] = useState({ x: 50, y: 50 });
    const moduleRefs = useRef({});
    const sectionRef = useRef(null);
    const hoverTimeoutRef = useRef(null);

    const handleMouseEnter = (id) => {
        if (window.innerWidth < 1024) return;
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        setHoveredModule(id);

        const cardEl = moduleRefs.current[id];
        const sectionEl = sectionRef.current;
        if (cardEl && sectionEl) {
            const cardRect = cardEl.getBoundingClientRect();
            const sectionRect = sectionEl.getBoundingClientRect();
            const x = ((cardRect.left - sectionRect.left + cardRect.width / 2) / sectionRect.width) * 100;
            const y = ((cardRect.top - sectionRect.top + cardRect.height / 2) / sectionRect.height) * 100;
            setBlobPos({ x, y });
        }
    };

    const handleMouseLeave = () => {
        if (window.innerWidth < 1024) return;
        hoverTimeoutRef.current = setTimeout(() => setHoveredModule(null), 150);
    };

    useEffect(() => {
        // 🔧 OPT: montar los módulos lazy solo cuando la sección entra al viewport
        const sectionEl = sectionRef.current;
        const visibilityObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    visibilityObserver.disconnect();
                }
            },
            { rootMargin: '300px' } // empieza a cargar 300px antes para que ya esté listo
        );
        if (sectionEl) visibilityObserver.observe(sectionEl);

        // IntersectionObserver para mobile (highlight al scrollear)
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
        // esperar a que los módulos estén montados antes de observar
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
    const blobColor = currentModule ? (MODULE_COLORS[currentModule] ?? null) : null;

    const cardClass = "module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[82vw] w-[82vw] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-start";

    // Lista de módulos para renderizar — fácil de mantener
    const modules = [
        { id: 'recuperacion',          Component: DRPModule },
        { id: 'academia',              Component: AcademiaModule },
        { id: 'pildoras',              Component: PildorasModule },
        { id: 'lumel',                 Component: LUMELModule },
        { id: 'obraspublicas',         Component: ObrasPublicasModule },
        { id: 'hechoMexico',           Component: HechoMexicoModule },
        { id: 'faqswhatsapp',          Component: FAQsWhatsAppModule },
        { id: 'biexpress',             Component: BIExpressModule },
        { id: 'etldatalake',           Component: ETLDataLakeModule },
        { id: 'conciliacion',          Component: ConciliacionModule },
        { id: 'prediccionventas',      Component: PrediccionVentasModule },
        { id: 'inventariointeligente', Component: InventarioInteligentModule },
        { id: 'deteccionanomalias',    Component: DeteccionAnomalíasModule },
        { id: 'portaldocumentos',      Component: PortalDocumentosModule },
        { id: 'cerebroCorporativo', Component: CerebroCorporativoModule },
        { id: 'controllista',       Component: ControllistaModule       },
        { id: 'intelligenceHub',    Component: IntelligenceHubModule    },
    ];

    return (
        <section
            id="marketplace"
            ref={sectionRef}
            className="py-24 relative bg-[var(--fondo-secundario)]"
        >
            {/* 🔧 OPT: blob con will-change:opacity — solo GPU opacity, sin repaint de layout */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }} aria-hidden="true">
                <div
                    className="absolute w-[700px] h-[700px] rounded-full -translate-x-1/2 -translate-y-1/2"
                    style={{
                        left: `${blobPos.x}%`,
                        top: `${blobPos.y}%`,
                        background: blobColor || 'transparent',
                        opacity: blobColor ? 0.55 : 0,
                        filter: 'blur(100px)',
                        transition: 'opacity 700ms ease, background 500ms ease, left 400ms ease, top 400ms ease',
                        willChange: 'opacity, left, top',
                    }}
                />
            </div>

            <div className="container mx-auto lg:px-6" style={{ position: 'relative', zIndex: 1 }}>
                <div className="text-center mb-8 md:mb-16 px-6">
                    <div className="inline-block px-3 py-1 md:px-4 md:py-2 bg-[var(--secundario)] bg-opacity-10 rounded-full mb-3 md:mb-4">
                        <span className="text-[var(--acento)] font-mono text-xs md:text-sm">Marketplace</span>
                    </div>
                    <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-6 text-white">
                        Descubre nuestros Servicios<br/>
                        <span className="gradient-text">Personalizados para tus necesidades</span>
                    </h2>
                </div>

                <div
                    className="lg:flex lg:flex-wrap lg:justify-center lg:gap-8 lg:max-w-6xl lg:mx-auto overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none flex gap-4 lg:px-0 scrollbar-hide pb-6"
                    style={{ paddingLeft: '5vw', paddingRight: '5vw', WebkitOverflowScrolling: 'touch' }}
                >
                    {/* 🔧 OPT: Suspense envuelve TODOS los módulos → un solo fallback para toda la lista */}
                    <Suspense fallback={
                        <>
                            {modules.map(({ id }) => (
                                <div key={id} className={cardClass}>
                                    <CardSkeleton />
                                </div>
                            ))}
                        </>
                    }>
                        {/* 🔧 OPT: solo monta los componentes cuando la sección es visible */}
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

export default Marketplace;