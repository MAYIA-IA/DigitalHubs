import { useEffect, useState, useRef } from 'react'

const About = () => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        // 🔧 OPT: once:true → desconecta el observer automáticamente después de animar
        // Evita que el callback siga corriendo en cada scroll
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasAnimated(true);
                    observer.disconnect(); // 🔧 OPT: limpia el observer, ya no se necesita
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []); // 🔧 OPT: [] en lugar de [hasAnimated] → el effect solo corre una vez al montar

    return (
        <section
            id="about"
            ref={sectionRef}
            className="py-24 bg-gradient-to-b from-[var(--fondo-secundario)] to-[var(--fondo-principal)]"
        >
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">

                    <div className={`text-center mb-16 transition-all duration-1000 ${
                        hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                        <div className="inline-block px-6 py-2 bg-[var(--secundario)]/30 rounded-full mb-6 border-2 border-[var(--acento)]/50">
                            <span className="text-[var(--acento)] font-mono text-sm font-bold tracking-wide uppercase">
                                ¿Por qué HUB DIGITAL JALISCO?
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                            Ubicado en el Corazón <br/>
                            <span className="bg-gradient-to-r from-[var(--secundario)] via-[var(--acento)] to-[var(--secundario)] bg-clip-text text-transparent">
                                de JALISCO
                            </span>
                        </h2>

                        <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed font-normal">
                            Centro de Datos Tier III, Infraestructura de Alto Nivel para los datos de Jalisco.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;