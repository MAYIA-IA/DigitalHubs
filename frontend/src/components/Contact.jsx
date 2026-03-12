import { useState, useEffect, useRef } from 'react';

const contacts = [
    {
        name: 'V. Viniegra',
        email: 'Vviniegra@m2corporativo.com',
        phone: '55 53 31 55 26',
        phoneRaw: '5553315526',
        colorRaw: '#4881EB',
        glow: 'rgba(72,129,235,0.18)',
        initials: 'VV',
    },
    {
        name: 'Humberto Camacho',
        email: 'humberto.camacho@rebrights.com',
        phone: '81 1572 8965',
        phoneRaw: '8115728965',
        colorRaw: '#6366F1',
        glow: 'rgba(99,102,241,0.18)',
        initials: 'HC',
    },
];

const CopyButton = ({ value, label }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(value).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <button
            onClick={handleCopy}
            title={`Copiar ${label}`}
            className="flex-shrink-0 flex items-center gap-1 px-2 py-1 rounded-lg text-xs transition-all duration-200 active:scale-95 will-change-transform"
            style={{
                background: copied ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.06)',
                border: copied ? '1px solid rgba(16,185,129,0.4)' : '1px solid rgba(255,255,255,0.1)',
                color: copied ? '#10B981' : 'rgba(255,255,255,0.45)',
            }}
        >
            {copied ? (
                <>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Copiado</span>
                </>
            ) : (
                <>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copiar</span>
                </>
            )}
        </button>
    );
};

const Contact = () => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) setHasAnimated(true);
                });
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
    }, [hasAnimated]);

    return (
        <section id="contact" ref={sectionRef} className="relative py-24 pb-16 bg-black">
            <div className="container mx-auto px-6 relative z-10">
                <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
                    hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}>

                    {/* Heading */}
                    <div className="text-center mb-12">
                        <div className="inline-block px-4 py-2 bg-[var(--secundario)] bg-opacity-10 rounded-full mb-4">
                            <span className="text-[var(--acento)] font-mono text-sm">Contacto</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">
                            Hablemos de tu <span className="gradient-text">Proyecto</span>
                        </h2>
                        <p className="text-[var(--texto-medio)] text-base md:text-lg">
                            Escríbenos o llámanos directamente
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {contacts.map((c, i) => (
                            <div
                                key={i}
                                className="rounded-2xl p-7 flex flex-col gap-5 transition-all duration-500"
                                style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    boxShadow: `0 4px 24px ${c.glow}`,
                                    transitionDelay: hasAnimated ? `${i * 120}ms` : '0ms',
                                }}
                            >
                                {/* Name row */}
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                                        style={{ background: `linear-gradient(135deg, ${c.colorRaw}cc, ${c.colorRaw}44)` }}
                                    >
                                        {c.initials}
                                    </div>
                                    <p className="text-white font-semibold text-base">{c.name}</p>
                                </div>

                                {/* Email row */}
                                <div className="flex items-center gap-3">
                                    <svg className="w-4 h-4 flex-shrink-0 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <a
                                        href={`mailto:${c.email}`}
                                        className="text-sm text-[var(--texto-medio)] hover:text-white transition-colors duration-200 break-all flex-1 min-w-0"
                                    >
                                        {c.email}
                                    </a>
                                    <CopyButton value={c.email} label="correo" />
                                </div>

                                {/* Phone row */}
                                <div className="flex items-center gap-3">
                                    <svg className="w-4 h-4 flex-shrink-0 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <a
                                        href={`tel:${c.phoneRaw}`}
                                        className="text-sm font-mono text-[var(--texto-medio)] hover:text-white transition-colors duration-200 flex-1"
                                    >
                                        {c.phone}
                                    </a>
                                    <CopyButton value={c.phoneRaw} label="teléfono" />
                                </div>

                                {/* Divider */}
                                <div className="h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />

                                {/* Send email CTA */}
                                <a
                                    href={`mailto:${c.email}`}
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-medium text-white transition-all duration-300 hover:brightness-110 active:scale-[0.98] will-change-transform"
                                    style={{ background: `${c.colorRaw}33`, border: `1px solid ${c.colorRaw}55` }}
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Mandar correo
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;