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



const Marketplace = () => {
    const [hoveredModule, setHoveredModule] = useState(null);
    const moduleRefs = useRef({});

    useEffect(() => {
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
                    setHoveredModule(moduleId);
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
    }, []);

    return (
        // FIX 1: inline style backgroundColor para iOS Safari (bg-[] de Tailwind se interpreta raro)
        // FIX 2: eliminado overflow-hidden que cortaba las tarjetas en mobile
        <section id="marketplace" className="py-24 relative" style={{ backgroundColor: '#0A0A14' }}>
            <div className="container mx-auto lg:px-6">
                <div className="text-center mb-16 px-6">
                    <div className="inline-block px-4 py-2 bg-[#4881EB] bg-opacity-10 rounded-full mb-4">
                        <span className="text-[#7FD1FF] font-mono text-sm">Marketplace</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Descubre nuestros Servicios<br/>
                        <span className="gradient-text">Personalizados para tus necesidades</span>
                    </h2>
                </div>

                {/* FIX 3: padding lateral con vw para el efecto peek en mobile */}
                {/* FIX 4: WebkitOverflowScrolling para scroll suave en iOS */}
                <div
                    className="lg:flex lg:flex-wrap lg:justify-center lg:gap-8 lg:max-w-6xl lg:mx-auto overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none flex gap-4 lg:px-0 scrollbar-hide pb-6"
                    style={{ paddingLeft: '5vw', paddingRight: '5vw', WebkitOverflowScrolling: 'touch' }}
                >

                    {/* MARKETPLACE */}

                    {/* DRP - Morado */}
                    {/* FIX 5: w-[82vw] en lugar de w-[280px] fijo — se adapta a cualquier pantalla */}
                    {/* FIX 6: eliminados los divs "fixed inset-0" — en iOS Safari con transform:scale rompen el layout y generan el tinte morado */}
                    <div
                        ref={(el) => (moduleRefs.current['recuperacion'] = el)}
                        data-module-id="recuperacion"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[82vw] w-[82vw] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-start"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('recuperacion')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <DRPModule hoveredModule={hoveredModule} moduleId="recuperacion" />
                    </div>

                    {/* Academia - Verde */}
                    <div
                        ref={(el) => (moduleRefs.current['academia'] = el)}
                        data-module-id="academia"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[82vw] w-[82vw] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-start"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('academia')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <AcademiaModule hoveredModule={hoveredModule} moduleId="academia" />
                    </div>

                    {/* Pildoras - Verde */}
                    <div
                        ref={(el) => (moduleRefs.current['pildoras'] = el)}
                        data-module-id="pildoras"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[82vw] w-[82vw] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-start"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('pildoras')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <PildorasModule hoveredModule={hoveredModule} moduleId="pildoras" />
                    </div>

                    {/* LUMEL - Morado */}
                    <div
                        ref={(el) => (moduleRefs.current['lumel'] = el)}
                        data-module-id="lumel"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[82vw] w-[82vw] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-start"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('lumel')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <LUMELModule hoveredModule={hoveredModule} moduleId="lumel" />
                    </div>


                    {/* GuardIA - Azul */}
                    {/* <div
                        ref={(el) => (moduleRefs.current['GuardIA'] = el)}
                        data-module-id="GuardIA"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[82vw] w-[82vw] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-start"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('GuardIA')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <GuardIAModule hoveredModule={hoveredModule} moduleId="GuardIA" />
                    </div> */}

                    {/* Sendero Seguro */}
                    {/* <div
                        ref={(el) => (moduleRefs.current['senderoseguro'] = el)}
                        data-module-id="senderoseguro"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[82vw] w-[82vw] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-start"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('senderoseguro')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <SenderoSeguroModule hoveredModule={hoveredModule} moduleId="senderoseguro" />
                    </div> */}

                    {/* Parque Seguro */}
                    {/* <div
                        ref={(el) => (moduleRefs.current['parqueseguro'] = el)}
                        data-module-id="parqueseguro"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[82vw] w-[82vw] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-start"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('parqueseguro')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <ParqueSeguroModule hoveredModule={hoveredModule} moduleId="parqueseguro" />
                    </div> */}

                    {/* Obras Publicas - Verde */}
                    <div
                        ref={(el) => (moduleRefs.current['obraspublicas'] = el)}
                        data-module-id="obraspublicas"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[82vw] w-[82vw] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-start"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('obraspublicas')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <ObrasPublicasModule hoveredModule={hoveredModule} moduleId="obraspublicas" />
                    </div>

                    {/* Hecho Mexico - Rojo */}
                    <div
                        ref={(el) => (moduleRefs.current['hechoMexico'] = el)}
                        data-module-id="hechoMexico"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[82vw] w-[82vw] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-start"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('hechoMexico')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <HechoMexicoModule hoveredModule={hoveredModule} moduleId="hechoMexico" />
                    </div>

                    {/* RetailModule - Azul */}
                    {/* <div
                        ref={(el) => (moduleRefs.current['retail'] = el)}
                        data-module-id="retail"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[82vw] w-[82vw] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-start"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('retail')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <RetailModule hoveredModule={hoveredModule} moduleId="retail" />
                    </div> */}

                    {/* FAQs WhatsApp - Verde WhatsApp */}
                    <div
                        ref={(el) => (moduleRefs.current['faqswhatsapp'] = el)}
                        data-module-id="faqswhatsapp"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[82vw] w-[82vw] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-start"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('faqswhatsapp')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <FAQsWhatsAppModule hoveredModule={hoveredModule} moduleId="faqswhatsapp" />
                    </div>

                    {/* BI Express - Ámbar */}
                    <div
                        ref={(el) => (moduleRefs.current['biexpress'] = el)}
                        data-module-id="biexpress"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[82vw] w-[82vw] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-start"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('biexpress')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <BIExpressModule hoveredModule={hoveredModule} moduleId="biexpress" />
                    </div>

                    {/* ETL DataLake - Cyan */}
                    <div
                        ref={(el) => (moduleRefs.current['etldatalake'] = el)}
                        data-module-id="etldatalake"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[82vw] w-[82vw] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-start"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('etldatalake')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <ETLDataLakeModule hoveredModule={hoveredModule} moduleId="etldatalake" />
                    </div>

                    {/* Conciliación - Violeta */}
                    <div
                        ref={(el) => (moduleRefs.current['conciliacion'] = el)}
                        data-module-id="conciliacion"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[82vw] w-[82vw] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-start"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('conciliacion')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <ConciliacionModule hoveredModule={hoveredModule} moduleId="conciliacion" />
                    </div>

                    {/* Predicción de Ventas - Esmeralda */}
                    <div
                        ref={(el) => (moduleRefs.current['prediccionventas'] = el)}
                        data-module-id="prediccionventas"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[82vw] w-[82vw] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-start"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('prediccionventas')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <PrediccionVentasModule hoveredModule={hoveredModule} moduleId="prediccionventas" />
                    </div>

                    {/* Inventario Inteligente - Naranja */}
                    <div
                        ref={(el) => (moduleRefs.current['inventariointeligente'] = el)}
                        data-module-id="inventariointeligente"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[82vw] w-[82vw] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-start"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('inventariointeligente')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <InventarioInteligentModule hoveredModule={hoveredModule} moduleId="inventariointeligente" />
                    </div>

                    {/* Detección de Anomalías - Rojo */}
                    <div
                        ref={(el) => (moduleRefs.current['deteccionanomalias'] = el)}
                        data-module-id="deteccionanomalias"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[82vw] w-[82vw] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-start"
                        onMouseEnter={() => window.innerWidth >= 1024 && setHoveredModule('deteccionanomalias')}
                        onMouseLeave={() => window.innerWidth >= 1024 && setHoveredModule(null)}
                    >
                        <DeteccionAnomalíasModule hoveredModule={hoveredModule} moduleId="deteccionanomalias" />
                    </div>

                    {/* Portal Documentos IA - Índigo */}
                    <div
                        ref={(el) => (moduleRefs.current['portaldocumentos'] = el)}
                        data-module-id="portaldocumentos"
                        className="module-card group relative transition-all duration-500 lg:hover:scale-105 hover:z-10 min-w-[82vw] w-[82vw] lg:min-w-0 lg:w-[calc(50%-16px)] max-w-[500px] snap-start"
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