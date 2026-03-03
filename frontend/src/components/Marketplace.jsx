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

import FAQsWhatsAppModule from './modules/Marketplace/FAQsWhatsappModule.jsx';
import BIExpressModule from './modules/Marketplace/BIExpressModule.jsx';
import ETLDataLakeModule from './modules/Marketplace/ETLDataLakeModule.jsx';
import ConciliacionModule from './modules/Marketplace/ConciliacionModule.jsx';
import PrediccionVentasModule from './modules/Marketplace/PrediccionVentasModule.jsx';
import InventarioInteligentModule from './modules/Marketplace/InventarioInteligentModule.jsx';
import DeteccionAnomalíasModule from './modules/Marketplace/DeteccionAnomalíasModule.jsx';
import PortalDocumentosModule from './modules/Marketplace/PortalDocumentosModule.jsx';

// Color de blob por módulo — igual que en Spaces.jsx
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
};

const Marketplace = () => {
    const [hoveredModule, setHoveredModule] = useState(null);
    const [activeModule, setActiveModule] = useState(null);
    const moduleRefs = useRef({});
    const sectionRef = useRef(null);

    // ── IntersectionObserver para mobile ──────────────────────────────────
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

    // El módulo activo: en desktop es hoveredModule, en mobile es activeModule
    const currentModule = hoveredModule || activeModule;
    const blobColor = MODULE_COLORS[currentModule] || null;

    const cardClass = "module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[82vw] w-[82vw] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-start";

    return (
        <section
            id="marketplace"
            ref={sectionRef}
            className="py-24 relative"
            style={{ backgroundColor: '#0A0A14' }}
        >
            {/*
              ── BLOB GLOW ────────────────────────────────────────────────────────
              Mismo patrón que Spaces.jsx PERO:
              - position: absolute (no fixed) → compatible con transform:scale en iOS Safari
              - overflow: hidden en la sección contiene el blob sin clipear las tarjetas
              - willChange: opacity → GPU layer, sin recalcular layout
              - pointer-events: none → no interfiere con clicks ni scroll
              ───────────────────────────────────────────────────────────────────
            */}
            <div
                className="absolute inset-0 pointer-events-none overflow-hidden"
                style={{ zIndex: 0 }}
                aria-hidden="true"
            >
                <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
                    style={{
                        // blur via boxShadow spread — NO filter:blur (rompe stacking context iOS)
                        // Usamos background + opacity transition, idéntico a Spaces.jsx
                        background: blobColor || 'transparent',
                        opacity: blobColor ? 0.55 : 0,
                        filter: 'blur(100px)',
                        transition: 'opacity 700ms ease, background 400ms ease',
                        willChange: 'opacity',
                        // transform ya está en el className, no agregar más transforms aquí
                    }}
                />
            </div>

            <div className="container mx-auto lg:px-6" style={{ position: 'relative', zIndex: 1 }}>
                <div className="text-center mb-16 px-6">
                    <div className="inline-block px-4 py-2 bg-[#4881EB] bg-opacity-10 rounded-full mb-4">
                        <span className="text-[#7FD1FF] font-mono text-sm">Marketplace</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Descubre nuestros Servicios<br/>
                        <span className="gradient-text">Personalizados para tus necesidades</span>
                    </h2>
                </div>

                <div
                    className="lg:flex lg:flex-wrap lg:justify-center lg:gap-8 lg:max-w-6xl lg:mx-auto overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none flex gap-4 lg:px-0 scrollbar-hide pb-6"
                    style={{ paddingLeft: '5vw', paddingRight: '5vw', WebkitOverflowScrolling: 'touch' }}
                >

                    {/* DRP - Morado */}
                    <div
                        ref={(el) => (moduleRefs.current['recuperacion'] = el)}
                        data-module-id="recuperacion"
                        className={cardClass}
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('recuperacion')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <DRPModule hoveredModule={hoveredModule} moduleId="recuperacion" />
                    </div>

                    {/* Academia - Verde */}
                    <div
                        ref={(el) => (moduleRefs.current['academia'] = el)}
                        data-module-id="academia"
                        className={cardClass}
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('academia')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <AcademiaModule hoveredModule={hoveredModule} moduleId="academia" />
                    </div>

                    {/* Pildoras - Verde */}
                    <div
                        ref={(el) => (moduleRefs.current['pildoras'] = el)}
                        data-module-id="pildoras"
                        className={cardClass}
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('pildoras')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <PildorasModule hoveredModule={hoveredModule} moduleId="pildoras" />
                    </div>

                    {/* LUMEL - Morado */}
                    <div
                        ref={(el) => (moduleRefs.current['lumel'] = el)}
                        data-module-id="lumel"
                        className={cardClass}
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('lumel')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <LUMELModule hoveredModule={hoveredModule} moduleId="lumel" />
                    </div>

                    {/* GuardIA */}
                    {/* <div
                        ref={(el) => (moduleRefs.current['GuardIA'] = el)}
                        data-module-id="GuardIA"
                        className={cardClass}
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('GuardIA')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <GuardIAModule hoveredModule={hoveredModule} moduleId="GuardIA" />
                    </div> */}

                    {/* Sendero Seguro */}
                    {/* <div
                        ref={(el) => (moduleRefs.current['senderoseguro'] = el)}
                        data-module-id="senderoseguro"
                        className={cardClass}
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('senderoseguro')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <SenderoSeguroModule hoveredModule={hoveredModule} moduleId="senderoseguro" />
                    </div> */}

                    {/* Parque Seguro */}
                    {/* <div
                        ref={(el) => (moduleRefs.current['parqueseguro'] = el)}
                        data-module-id="parqueseguro"
                        className={cardClass}
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('parqueseguro')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <ParqueSeguroModule hoveredModule={hoveredModule} moduleId="parqueseguro" />
                    </div> */}

                    {/* Obras Publicas - Verde */}
                    <div
                        ref={(el) => (moduleRefs.current['obraspublicas'] = el)}
                        data-module-id="obraspublicas"
                        className={cardClass}
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('obraspublicas')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <ObrasPublicasModule hoveredModule={hoveredModule} moduleId="obraspublicas" />
                    </div>

                    {/* Hecho Mexico - Rojo */}
                    <div
                        ref={(el) => (moduleRefs.current['hechoMexico'] = el)}
                        data-module-id="hechoMexico"
                        className={cardClass}
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('hechoMexico')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <HechoMexicoModule hoveredModule={hoveredModule} moduleId="hechoMexico" />
                    </div>

                    {/* RetailModule */}
                    {/* <div
                        ref={(el) => (moduleRefs.current['retail'] = el)}
                        data-module-id="retail"
                        className={cardClass}
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('retail')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <RetailModule hoveredModule={hoveredModule} moduleId="retail" />
                    </div> */}

                    {/* FAQs WhatsApp - Verde */}
                    <div
                        ref={(el) => (moduleRefs.current['faqswhatsapp'] = el)}
                        data-module-id="faqswhatsapp"
                        className={cardClass}
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('faqswhatsapp')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <FAQsWhatsAppModule hoveredModule={hoveredModule} moduleId="faqswhatsapp" />
                    </div>

                    {/* BI Express - Ámbar */}
                    <div
                        ref={(el) => (moduleRefs.current['biexpress'] = el)}
                        data-module-id="biexpress"
                        className={cardClass}
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('biexpress')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <BIExpressModule hoveredModule={hoveredModule} moduleId="biexpress" />
                    </div>

                    {/* ETL DataLake - Cyan */}
                    <div
                        ref={(el) => (moduleRefs.current['etldatalake'] = el)}
                        data-module-id="etldatalake"
                        className={cardClass}
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('etldatalake')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <ETLDataLakeModule hoveredModule={hoveredModule} moduleId="etldatalake" />
                    </div>

                    {/* Conciliación - Violeta */}
                    <div
                        ref={(el) => (moduleRefs.current['conciliacion'] = el)}
                        data-module-id="conciliacion"
                        className={cardClass}
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('conciliacion')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <ConciliacionModule hoveredModule={hoveredModule} moduleId="conciliacion" />
                    </div>

                    {/* Predicción de Ventas - Esmeralda */}
                    <div
                        ref={(el) => (moduleRefs.current['prediccionventas'] = el)}
                        data-module-id="prediccionventas"
                        className={cardClass}
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('prediccionventas')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <PrediccionVentasModule hoveredModule={hoveredModule} moduleId="prediccionventas" />
                    </div>

                    {/* Inventario Inteligente - Naranja */}
                    <div
                        ref={(el) => (moduleRefs.current['inventariointeligente'] = el)}
                        data-module-id="inventariointeligente"
                        className={cardClass}
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('inventariointeligente')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <InventarioInteligentModule hoveredModule={hoveredModule} moduleId="inventariointeligente" />
                    </div>

                    {/* Detección de Anomalías - Rojo */}
                    <div
                        ref={(el) => (moduleRefs.current['deteccionanomalias'] = el)}
                        data-module-id="deteccionanomalias"
                        className={cardClass}
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('deteccionanomalias')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <DeteccionAnomalíasModule hoveredModule={hoveredModule} moduleId="deteccionanomalias" />
                    </div>

                    {/* Portal Documentos IA - Índigo */}
                    <div
                        ref={(el) => (moduleRefs.current['portaldocumentos'] = el)}
                        data-module-id="portaldocumentos"
                        className={cardClass}
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('portaldocumentos')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <PortalDocumentosModule hoveredModule={hoveredModule} moduleId="portaldocumentos" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Marketplace;